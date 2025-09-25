import { Link } from "react-router-dom";
import React from "react";
//import './style/HomePage.css'

const BookListPage = () => {
    return (
        <div>
            <h1>Bookstore</h1>
            <p>Welcome to</p>
            <Link to="/books">Go to bookList</Link>
        </div>
    );
}

export default BookListPage;