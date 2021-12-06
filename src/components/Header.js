import React from "react";
import AddListing from "./AddItem";
import Search from "./Search";

function Header( { onSearch, onAddListing } ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <br/>
      <AddListing onAddListing={onAddListing} />
    </header>
  );
}

export default Header;
