import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';

import useTyping from 'react-typing-game-hook';
import FightContext from '../lib/fight-context';

export default function TypingGame(props) {
  if (props.text === 'Getting phrase') {
    return <></>;
  }
  const [duration, setDuration] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const letters = useRef(null);
  const { youFinishFirst, counting } = useContext(FightContext);

  const {
    states: {
      charsState,
      currIndex,
      startTime,
      endTime,
      phase
    },
    actions: { insertTyping }
  } = useTyping(props.text, {
    skipCurrentWordOnSpace: false,
    pauseOnError: true
  });

  const cursor = useMemo(() => {
    if (currIndex !== -1 && letters.current) {
      const spanref = letters.current.children[currIndex];
      const left = spanref.offsetLeft + spanref.offsetWidth - 2;
      const top = spanref.offsetTop - 2;
      return { left, top };
    } else {
      return { left: -2, top: -2 };
    }
  }, [currIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setDuration(prevCount => prevCount + 1);
    }, 1000);
    setTimerId(id);
  }, [startTime]);

  useEffect(() => {
    if (endTime) {
      youFinishFirst();
      props.onBlur();
    }
  }, [endTime]);

  const handleKeyPress = key => {
    if (counting) return;
    if (key.length !== 1) return;
    insertTyping(key);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={event => handleKeyPress(event.key)}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      style={{ position: 'relative' }}
      className="outline-none"
    >
      <div ref={letters} className="select-none">
        {props.text.split('').map((ltr, i) => {
          const state = charsState[i];
          let color = '';
          if (counting) {
            color = 'gray-text';
          } else if (state === 1) color = 'green-text';
          else if (state !== 0 && state !== 1) color = 'red-text';

          return (
            <span key={ltr + i} className={color}>
              {ltr}
            </span>
          );
        })}
      </div>
      {phase !== 2 && props.isFocused
        ? (
          <span
            style={{ left: cursor.left, top: cursor.top, opacity: 1 }}
            className="caret"
          >
            |
          </span>
          )
        : null}
    </div>
  );
}
