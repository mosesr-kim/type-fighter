import React, { useEffect, useMemo, useRef, useContext } from 'react';
import { styled } from '@material-ui/core';
import formatTime from '../lib/format-time';

import useTyping from 'react-typing-game-hook';
import FightContext from '../lib/fight-context';

const InfoText = styled('span')({
  fontFamily: 'retro, sans-serif',
  fontSize: '1.15rem'
});

const WpmDisplay = styled('div')({
  position: 'absolute',
  bottom: '0',
  left: '25%'
});

const TimerDisplay = styled('div')({
  position: 'absolute',
  bottom: '0',
  right: '25%'
});

export default function TypingGame(props) {
  if (props.text === 'Getting phrase') {
    return <></>;
  }

  const letters = useRef(null);
  const {
    youFinishFirst, counting, duration,
    wordCount, setWordCount,
    timerId
  } = useContext(FightContext);

  const {
    states: {
      charsState,
      currIndex,
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
    if (!endTime) return;

    clearInterval(timerId);
    setWordCount(count => count + 1);
    youFinishFirst();
    props.onBlur();
  }, [endTime]);

  const handleKeyPress = key => {
    if (counting) return;
    if (key.length !== 1) return;
    if (key === ' ' && charsState[currIndex] === 1) {
      setWordCount(count => count + 1);
    }
    insertTyping(key);
  };

  const wpmDisplay = duration <= 0
    ? 'WPM: 0'
    : `WPM: ${Math.floor(wordCount / (duration / 60))}`;

  return (
    <>
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

      <WpmDisplay>
        <InfoText>{wpmDisplay}</InfoText>
      </WpmDisplay>

      <TimerDisplay>
        <InfoText>
          {formatTime(duration)}
        </InfoText>
      </TimerDisplay>
    </>
  );
}
