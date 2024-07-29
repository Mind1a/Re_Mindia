import React from "react";

const AddBookButtons = ({ addBooks, num }) => {
  return (
    <div>
      <h1>Button</h1>
      <button onClick={() => addBooks(num)}>Add {num}</button>
    </div>
  );
};

export default AddBookButtons;
