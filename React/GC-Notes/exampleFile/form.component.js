import React, { useState } from "react";

let Form = ({ updateInfo }) => {
  let [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    age: ""
  });

  let handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    updateInfo(updatedInfo);
  };

  let handleChange = event => {
    setUpdatedInfo({
      ...updatedInfo,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={updatedInfo.name}
        placeholder="Name"
        type="text"
        name="name"
      />
      <input
        onChange={handleChange}
        value={updatedInfo.age}
        placeholder="Age"
        type="text"
        name="age"
      />
      <button>Update</button>
    </form>
  );
};

export default Form;
