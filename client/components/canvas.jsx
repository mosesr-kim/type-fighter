// import React, { useRef, useEffect } from 'react';

// const Canvas = props => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const canvasWidth = canvas.width = 500;
//     const canvasHeight = canvas.height = 500;

//     const characterImage = new Image();
//     characterImage.src = '/sprites/chunli.gif';
//     const spriteWidth = 53;
//     const spriteHeight = 115;
//     let frameX = 0;
//     const frameY = 0;
//     let gameFrame = 0;
//     const staggerFrames = 50;

//     function animate() {
//       ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//       const position = Math.floor(gameFrame / staggerFrames) % 4;
//       frameX = spriteWidth * position;
//       ctx.drawImage(characterImage, frameX, frameY * spriteHeight,
//         spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
//       gameFrame++;
//       requestAnimationFrame(animate);
//     }

//     animate();
//   }, []);

//   return <canvas ref={canvasRef} {...props} id="canvas"/>;
// };

// export default Canvas;
