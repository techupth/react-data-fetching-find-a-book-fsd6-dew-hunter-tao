import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [findBook, setFindBook] = useState("");
  const [bookResult, setBookResult] = useState([]);

  const getBook = async () => {
    const result =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${findBook}
    `);
    console.log(result);
    setBookResult(result.data.items);
  };

  useEffect(() => {
    getBook();
  }, [findBook]);

  const handleInput = (event) => {
    setFindBook(event.target.value);
  };

  return (
    <div className="App">
      <label htmlFor="find-book">Find a Book</label>
      <input
        id="find-book"
        type="text"
        value={findBook}
        onChange={handleInput}
      />
      <div className="book-result">
        {bookResult.map((item, index) => {
          return (
            <div key={index} className="show-book">
              <h3>{item.volumeInfo.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
