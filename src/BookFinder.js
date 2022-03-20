import React from "react";

const BookFinder = ({ title, image, description, authors, publishedDate }) => {
  const max_limit = 120;

  const text = `${description}`;

  return (
    <div className="bookFinder">
      <div className="bookCover">
        <img src={image} alt="Book-Name" />
      </div>
      <div className="bookDetails">
        <h1>{title}</h1>
        <div className="published">
          <small>by {authors}</small>
          <small>Published in {publishedDate}</small>
        </div>
        <div className="descripthion">
          <p>{`${text.substring(0, max_limit)}...`}</p>
        </div>
      </div>
    </div>
  );
};

export default BookFinder;
