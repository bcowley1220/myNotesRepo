import React from "react";

let Info = ({ myInfo, changeInfo }) => {
  return (
    <div>
      <div>
        <h1>My name is: {myInfo.name} </h1>
        <p>My age is : {myInfo.age}</p>
      </div>
    </div>
  );
};

export default Info;
