import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import useStore from "../../zustand/zustand";

const Home = () => {
  const {
    books,
    query,
    isButtonClicked,
    setQuery,
    setIsButtonClicked,
    addToWishlist,
    setBooks,
    API_KEY,
  } = useStore();

  
  console.log(books);
  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("problem network");
      }

      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchClick = () => {
    setIsButtonClicked(true);
    searchBooks();
  };

  return (
    
    <div>
      <img className="home_img" src="./img/home.3f4fc5b7.svg" alt=""></img>
      <h1>Поиск книг</h1>
      <div className="link">
        <Link to="/wishlist">Список любимых книг</Link>
      </div>
      <div className="search_container">
        <input
          type="text"
          placeholder="Название книги"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search_btn" onClick={handleSearchClick}>
          Поиск
        </button>
      </div>
      <div className="book_results">
        {isButtonClicked &&
          books.map((book) => (
            <div className="bookContainer" key={book.id}>
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt=""
                  className="book_image"
                />
              )}
              <h2 className="book_title">{book.volumeInfo.title}</h2>
              <h2 className="book_subtitle">{book.volumeInfo.subtitle}</h2>
              <button
                className="favoriteBookButton"
                onClick={() => addToWishlist(book)}
              >
                Добавить в список любимых
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
