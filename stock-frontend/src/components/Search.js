import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const centerInputTagStyle = {
    textAlign: "center"
  }

  const callSearchFunction = e => {
    // If the search button was clicked with no search entry, the event
    if(searchValue){
      search(searchValue);
      e.preventDefault();
    }

    e.preventDefault();
    resetInputField();
  };

  return (
    <div style = {centerInputTagStyle}>

    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

          <input onClick={callSearchFunction} type="submit" value="SEARCH" required/>
    </form>
    </div>

  );
};

export default Search;
