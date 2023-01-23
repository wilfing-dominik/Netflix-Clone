import React from "react";

export default function SearchBar({ placeHolder, handleSearchFocus }) {
  return (
    <input
      autoFocus
      onBlur={() => {
        handleSearchFocus(false);
      }}
      className="search-input"
      type="text"
      name="search"
      placeholder={placeHolder}
    />
  );
}
