import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
function App() {
  const [totalBooks, setTotalBooks] = useState(0);

  const addBooks = (num) => {
    setTotalBooks((prevBooks) => prevBooks + num);
  };

  return (
    <>
      <div>
        <Header totalBooks={totalBooks} />
        <Cards addBooks={addBooks} />
        <Footer totalBooks={totalBooks} />
      </div>
    </>
  );
}

export default App;
