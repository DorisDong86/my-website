import React, { useState } from 'react';

const ImgShakeY = ({ 
  imagePath, 
  height, 
  isAlwaysShaking = false, 
  shakeSpeed = 1, 
  alt
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const shouldShake = isAlwaysShaking || isHovered;

  const shakeAnimation = {
    animation: shouldShake ? `shakeY ${2 / shakeSpeed}s ease-in-out infinite` : 'none',
    height: `${height}px`,
    cursor: 'pointer'
  };

  const keyframes = `
    @keyframes shakeY {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-5px); }
      75% { transform: translateY(5px); }
    }
  `;
  const altStyle = `  
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    z-index: 1;
  `;
  return (
    <>
      <style>{keyframes}</style>
      <img
        src={imagePath}
        alt={alt}
        style={shakeAnimation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {/* // This is the code for displaying the alt text when hovering over the image */}
      <div className={altStyle} style={{display: alt? 'block' : 'hidden'}}>{alt}</div>
    </>
  );
};

export default ImgShakeY;