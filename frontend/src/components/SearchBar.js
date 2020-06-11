import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search vegetable prices"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
