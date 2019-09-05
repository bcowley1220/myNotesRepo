import React, { useState } from "react";

let Color = ({ theseColors }) => {
  return (
    <div>
      <div>
        {theseColors.map((color, index) => {
          return <p key={index}>{color}</p>;
        })}
      </div>
    </div>
  );
};

export default Color;
