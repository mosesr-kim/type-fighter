import React, { useRef, useEffect } from 'react';

const sprites = {
  samurai: {
    idle: {
      frames: 8,
      src: 'sprites/samurai/idle.png',
      width: 200,
      height: 200
    },
    attack: {
      frames: 6,
      src: 'sprites/samurai/attack.png',
      width: 200,
      height: 200
    },
    hit: {
      frames: 4,
      src: 'sprites/samurai/hit.png',
      width: 200,
      height: 200
    },
    death: {
      frames: 6,
      src: 'sprites/samurai/death.png',
      width: 200,
      height: 200
    }
  },
  wizard: {
    idle: {
      frames: 8,
      src: 'sprites/wizard/idle.png',
      width: 150,
      height: 150
    },
    attack: {
      frames: 8,
      src: 'sprites/wizard/attack.png',
      width: 150,
      height: 150
    },
    hit: {
      frames: 4,
      src: 'sprites/wizard/hit.png',
      width: 150,
      height: 150
    },
    death: {
      frames: 5,
      src: 'sprites/wizard/death.png',
      width: 150,
      height: 150
    }
  },
  king: {
    idle: {
      frames: 8,
      src: 'sprites/king/idle.png',
      width: 160,
      height: 160
    },
    attack: {
      frames: 4,
      src: 'sprites/king/attack.png',
      width: 160,
      height: 160
    },
    hit: {
      frames: 4,
      src: 'sprites/king/hit.png',
      width: 160,
      height: 160
    },
    death: {
      frames: 6,
      src: 'sprites/king/death.png',
      width: 160,
      height: 160
    }
  },
  knight: {
    idle: {
      frames: 11,
      src: 'sprites/knight/idle.png',
      width: 180,
      height: 180
    },
    attack: {
      frames: 7,
      src: 'sprites/knight/attack.png',
      width: 180,
      height: 180
    },
    hit: {
      frames: 4,
      src: 'sprites/knight/hit.png',
      width: 180,
      height: 180
    },
    death: {
      frames: 11,
      src: 'sprites/knight/death.png',
      width: 180,
      height: 180
    }
  }
};

const character = 'knight';
const move = 'hit';

const Canvas = props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width = 500;
    const canvasHeight = canvas.height = 500;

    const characterImage = new Image();
    characterImage.src = sprites[character][move].src;
    const spriteWidth = sprites[character][move].width;
    const spriteHeight = sprites[character][move].height;
    let frameX = 0;
    const frameY = 0;
    let gameFrame = 0;
    const staggerFrames = 20;

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const position = Math.floor(gameFrame / staggerFrames) % sprites[character][move].frames;
      frameX = spriteWidth * position;
      ctx.drawImage(characterImage, frameX, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
      gameFrame++;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} {...props} id="canvas"/>;
};

export default Canvas;
