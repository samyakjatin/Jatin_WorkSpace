import React, { useState } from "react";

const SubmitButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };``

  return (
    <button
      style={{
        backgroundColor: isHovered ? "#5DB996" :"#118B50" ,
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Login 
    </button>
  );
};

export default SubmitButton;
