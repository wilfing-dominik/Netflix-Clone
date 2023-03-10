import React from "react";
import { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import axios from "../utils/requests";
import { useFetchData, useFilterData } from "../utils/customHooks";

export default function SearchBar({ placeHolder, setIsSearchBarFocused }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // useFilterData(axios.nowTrending, setResults, input);
  useFetchData(axios.allTVShows, setResults);

  return (
    <>
      <input
        autoFocus
        onBlur={() => {
          setIsSearchBarFocused(false);
        }}
        className="search-input"
        type="text"
        name="search"
        placeholder={placeHolder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="search-results">
        {results.map((result) => (
          <div key={result.id}>
            {result.name ? result.name : result.title} {results.length}
          </div>
        ))}
      </div>
    </>
  );
}
