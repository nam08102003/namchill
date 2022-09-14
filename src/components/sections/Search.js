import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <form action="" className="search-form">
      <BsSearch className="logo-search" />
      <input type="text" placeholder="Tìm kiếm..." id="search-input" />
    </form>
  );
}

export default Search;
