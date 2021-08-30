import React, { useRef, useEffect } from 'react';

// const maleNinja = {
//   attack: {
//     frames: 10,
//     src: 'sprites/male-ninja-attack.png',
//     width: 540,
//     height: 500
//   },
//   dead: {
//     frames: 10,
//     src: 'sprites/male-ninja-dead.png',
//     width: 484,
//     height: 500
//   },
//   idle: {
//     frames: 10,
//     src: 'sprites/male-ninja-idle.png',
//     width: 500,
//     height: 500
//   }
// };

const Canvas = props => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width = 500;
    const canvasHeight = canvas.height = 500;

    const characterImage = new Image();
    characterImage.src = '/sprites/male-ninja-idle.png';
    const spriteWidth = 234;
    const spriteHeight = 500;
    let frameX = 0;
    const frameY = 0;
    let gameFrame = 0;
    const staggerFrames = 20;

    function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const position = Math.floor(gameFrame / staggerFrames) % 10;
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
