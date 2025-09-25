import { Link } from "react-router-dom";
import React from "react";
//import './style/HomePage.css'

const CategoryPage = () => {
    return (
        <div>
            <h1>CategoryPage the Bookstore</h1>
            <p>This is the home page of the bookstore application</p>
            <Link to="/books">Go to bookList</Link>
        </div>
    );
}

export default CategoryPage;