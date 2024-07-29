import React from "react";
import AddBookButtons from "./AddBookButtons";

const Cards = ({ addBooks }) => {
  return (
    <div>
      <AddBookButtons addBooks={addBooks} num={1} />
      <AddBookButtons addBooks={addBooks} num={2} />
      <AddBookButtons addBooks={addBooks} num={3} />
    </div>
  );
};

export default Cards;
