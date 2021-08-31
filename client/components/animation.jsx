import React, { useRef, useEffect } from 'react';

const sprites = {
  samurai: {
    idle: {
      frames: 8,
      src: 'sprites/samurai/idle.png',
      width: 200,
      height: 200,
      staggerFrames: 25
    },
    attack: {
      frames: 6,
      src: 'sprites/samurai/attack.png',
      width: 200,
      height: 200,
      staggerFrames: 10
    },
    hit: {
      frames: 4,
      src: 'sprites/samurai/hit.png',
      width: 200,
      height: 200,
      staggerFrames: 25
    },
    death: {
      frames: 6,
      src: 'sprites/samurai/death.png',
      width: 200,
      height: 200,
      staggerFrames: 50
    }
  },
  wizard: {
    idle: {
      frames: 8,
      src: 'sprites/wizard/idle.png',
      width: 150,
      height: 150,
      staggerFrames: 25
    },
    attack: {
      frames: 8,
      src: 'sprites/wizard/attack.png',
      width: 150,
      height: 150,
      staggerFrames: 10
    },
    hit: {
      frames: 4,
      src: 'sprites/wizard/hit.png',
      width: 150,
      height: 150,
      staggerFrames: 25
    },
    death: {
      frames: 5,
      src: 'sprites/wizard/death.png',
      width: 150,
      height: 150,
      staggerFrames: 50
    }
  },
  king: {
    idle: {
      frames: 8,
      src: 'sprites/king/idle.png',
      width: 160,
      height: 160,
      staggerFrames: 25
    },
    attack: {
      frames: 4,
      src: 'sprites/king/attack.png',
      width: 160,
      height: 160,
      staggerFrames: 25
    },
    hit: {
      frames: 4,
      src: 'sprites/king/hit.png',
      width: 160,
      height: 160,
      staggerFrames: 25
    },
    death: {
      frames: 6,
      src: 'sprites/king/death.png',
      width: 160,
      height: 160,
      staggerFrames: 50
    }
  },
  knight: {
    idle: {
      frames: 11,
      src: 'sprites/knight/idle.png',
      width: 180,
      height: 180,
      staggerFrames: 25
    },
    attack: {
      frames: 7,
      src: 'sprites/knight/attack.png',
      width: 180,
      height: 180,
      staggerFrames: 10
    },
    hit: {
      frames: 4,
      src: 'sprites/knight/hit.png',
      width: 180,
      height: 180,
      staggerFrames: 25
    },
    death: {
      frames: 11,
      src: 'sprites/knight/death.png',
      width: 180,
      height: 180,
      staggerFrames: 50
    }
  }
};

export default function Animation(props) {
  const reverse = props.reverseSide ? 'reverse' : '';
  if (!props.character) return null;
  const { character, animation } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width = 500;
    const canvasHeight = canvas.height = 500;

    const characterImage = new Image();
    characterImage.src = sprites[character][animation].src;
    const spriteWidth = sprites[character][animation].width;
    const spriteHeight = sprites[character][animation].height;
    let frameX = 0;
    const frameY = 0;
    let gameFrame = 0;
    const staggerFrames = sprites[character][animation].staggerFrames;

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const position = Math.floor(gameFrame / staggerFrames) % sprites[character][animation].frames;
      frameX = spriteWidth * position;
      ctx.drawImage(characterImage, frameX, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
      gameFrame++;
      requestAnimationFrame(animate);
    }

    animate();
  }, [props]);

  return <canvas ref={canvasRef} className={reverse}/>;
}
