import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function FilterMovie({ currentPage, ContentFilter }) {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };
  return (
    <div className="filter-movies grid wide">
      <div className="container">
        <div className="filter-movies__top row">
          <div className="current-page col l-6 m-6 c-6">
            <span>{currentPage}</span>
          </div>
          <div className="toggle-filter col l-6 m-6 c-6">
            <button className="button-filter" onClick={changeShow}>
              Lọc phim
              <BiChevronDown />
            </button>
          </div>
        </div>
        <div className={`filter-movies__bottom ${show ? "show" : ""}`}>
          <div className="row">
            <div className="col l-10 m-10 c-12">
              <form action="" id="form-filter">
                {ContentFilter &&
                  ContentFilter.map((content, index) => {
                    return (
                      <div className="filter-box" key={index}>
                        <div className="filter-box-title">{content.name}</div>
                        <select
                          className="list-select"
                          id={content.id}
                          name={content.nameEng}
                        >
                          {content.children.map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    );
                  })}
              </form>
            </div>
            <div className="btn-group col l-2 m-2">
              <button className="btn-filter">Lọc Phim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterMovie;
