import React, { useState } from "react";

function ListingCard( { listing, id, description, image, location, onDelete }) {
  
  const [favoriteStatus, favoriteSetter] = useState(false);

  function toggleFavorite() {
    favoriteSetter(!favoriteStatus);
  }

  function handleDeleteClick() {
    // console.log("Delete:", listing)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDelete(listing))

  }
  
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteStatus ? (
          <button 
          className="emoji-button favorite active"
          onClick={toggleFavorite}
          >★</button>
        ) : (
          <button 
          className="emoji-button favorite"
          onClick={toggleFavorite}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
        className="emoji-button delete"
        onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
