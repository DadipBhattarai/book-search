import { useEffect, useState } from "react";
import "./App.css";
import BookFinder from "./BookFinder";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState();

  const fetchData = async (e) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
    );
    const data = await response.json();
    setBooks(data.items);
    console.log(data.items);
  };

  useEffect(() => {
    fetchData();
  }, [searchBook]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchBook(search);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        <b>Book Search</b>
      </h1>
      <div className="search">
        <input
          placeholder="Search Book"
          type="search"
          value={searchBook}
          onChange={handleSearch}
        />
        <button>Search</button>
      </div>
      {books.map((book, i) => (
        <BookFinder
          key={book.id}
          title={book.volumeInfo?.title}
          image={book.volumeInfo?.imageLinks?.thumbnail}
          description={book.volumeInfo?.description}
          authors={book.volumeInfo?.authors?.[0]}
          publishedDate={book.volumeInfo?.publishedDate}
        />
      ))}
      {/* <BookFinder />
      <BookFinder /> */}
    </div>
  );
}

export default App;
