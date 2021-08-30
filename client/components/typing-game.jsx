import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';

import useTyping from 'react-typing-game-hook';
import FightContext from '../lib/fight-context';

export default function TypingGame(props) {
  if (props.text === 'Getting phrase') {
    return <></>;
  }
  const [duration, setDuration] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const letters = useRef(null);
  const { youFinishFirst } = useContext(FightContext);

  const {
    states: {
      charsState,
      currIndex,
      correctChar,
      errorChar,
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
    if (endTime) {
      youFinishFirst();
    }
  }, [endTime]);

  const focusText = () => {
    setIsFocused(true);
  };

  const blurText = () => {
    setIsFocused(false);
  };

  const handleKeyPress = key => {
    if (key.length !== 1) return;
    insertTyping(key);
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={event => handleKeyPress(event.key)}
      onFocus={focusText}
      onBlur={blurText}
      style={{ position: 'relative' }}
      className="outline-none"
    >
      <div ref={letters} className="select-none">
        {props.text.split('').map((ltr, i) => {
          const state = charsState[i];
          let color = '';
          if (state === 1) color = 'green-text';
          else if (state !== 0 && state !== 1) color = 'red-text';

          return (
            <span key={ltr + i} className={color}>
              {ltr}
            </span>
          );
        })}
      </div>
      {phase !== 2 && isFocused
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
