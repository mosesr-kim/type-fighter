import React, { useEffect, useMemo, useRef, useState } from 'react';
import useTyping from 'react-typing-game-hook';

export default function TypingGame(props) {
  const [duration, setDuration] = useState(0);
  const letters = useRef(null);

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
      return { left: '0.5rem', top: '0.4rem' };
    }
  }, [currIndex]);

  const handleKeyPress = key => {
    if (key.length !== 1) return;
    insertTyping(key);
  };

  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={event => handleKeyPress(event.key)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
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
    </>
  );
}
