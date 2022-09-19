import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Search() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const ChangeContent = (value) => {
    setContent(value);
  };

  const RedirectPage = (key) => {
    if (key === "Enter") {
      navigate("/search", { state: { content: content } });
      setContent("");
    }
  };
  return (
    <div className="search-form">
      <BsSearch className="logo-search" />
      <input
        type="text"
        placeholder="Tìm kiếm..."
        id="search-input"
        onChange={(e) => ChangeContent(e.target.value)}
        onKeyPress={(e) => RedirectPage(e.key)}
        value={content}
      />
    </div>
  );
}

export default Search;
