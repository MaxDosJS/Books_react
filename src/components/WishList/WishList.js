import React from "react";
import { Link } from "react-router-dom";
import "./WishList.css";
import useStore from "../../zustand/zustand";

const Wishlist = () => {
  const { wishlist } = useStore();
  console.log(wishlist);
  return (
    <div>
      
      <Link to="/" className="home_route">
        Поиск книг
      </Link>
      <h2> Список любимых книг</h2>
      <img src="./img/book_icon.png" alt=""></img>
      <ul>
        {wishlist.map((book) => (
          <li key={book.id}>
            <div>
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.volumeInfo.title}
                />
              )}
              <h3>{book.volumeInfo.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
