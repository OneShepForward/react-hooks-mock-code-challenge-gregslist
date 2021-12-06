import React, { useState } from "react";

function Search( { onSearch }) {

  const [textInput, setTextInput] = useState("")

  function handleChange(e) {
    setTextInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(textInput);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={textInput}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
