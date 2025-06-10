import React, { useState } from "react";
import sunflowerPath1 from "../public/sunflower1.svg";
import sunflowerPath2 from "../public/sunflower2.svg";
import sunflowerPath3 from "../public/sunflower3.svg";
import sunflowerPath4 from "../public/sunflower4.svg";

const RotatingSunflower = ({ type = 0, height, rotateOnloading = false }) => {
  const [isHovered, setIsHovered] = useState(rotateOnloading);
  const paths = [sunflowerPath1, sunflowerPath2, sunflowerPath3,sunflowerPath4];

  const containerStyle = {
    cursor: "pointer",
  };

  const sunflowerStyle = {
    animation: isHovered ? "rotate 3s ease-out 0s 1" : "none",
    height: `${height}px`,
    width: "auto",
    transformOrigin: "center center"
  };


  const keyframes = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(720deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onAnimationEnd={() => setIsHovered(false)}
      >
        <img
          src={paths[type % paths.length]}
          alt="Rotating Sunflower"
          style={sunflowerStyle}
        />
      </div>
    </>
  );
};

export default RotatingSunflower;
