import React from "react";
import { useDispatch } from "react-redux";
import { searchItem } from "../store/product";

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(searchItem(e.target.value));
  };
  const borderClass = ``
  const outlineClass = ``

  return (
    <div className="search_box_container relative">
      <input
        type="search"
        onChange={searchHandler}
        placeholder="Search for Brand / Product"
        className="search_box w-60 pl-6 py-1 border-[2px] border-blue-600 rounded-lg focus:border-blue-400 outline-0"
      />
      <i className="fa fa-search absolute left-[6px] top-2 text-blue-600" aria-hidden="true"></i>
    </div>
  );
};

export default SearchBox;
