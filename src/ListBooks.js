import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import escapeRegExp from "escape-string-regexp";
// import sortBy from "sort-by";

class ListBooks extends Component {
  render() {
    let books=this.props.books.filter((book)=>book.shelf===this.props.shelf);
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id} className="">
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}
                />
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListBooks;
