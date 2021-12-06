import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [addedListing, setNewListing] = useState(null);

  function handleSearch(searchQuery) {
      console.log("Searching for:", searchQuery)
      setSearchTerm(searchQuery);
  }

  function handleAddListing(newListing) {
    console.log("App receives:", newListing)  
    setNewListing(newListing);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} onAddListing={handleAddListing} />
      <ListingsContainer searchTerm={searchTerm} addedListing={addedListing} />
    </div>
  );
}

export default App;
