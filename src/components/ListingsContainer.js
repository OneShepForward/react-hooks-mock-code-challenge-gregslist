import React, {useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { searchTerm, addListing } ) {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listings => {
      setListings(listings);
    })
  },[])

  function handleDelete(listingToDelete) {
    const updatedListings = listings.filter(listing => listing.id !== listingToDelete.id)
    setListings(updatedListings);
  }

  // console.log(searchTerm, "filtered listings:", listings.filter(listing => {
  //   return listing.description.toLowerCase().includes("Free");
  // }))

  //// Why doesn't this re-render after I POST in the AddItem component?
  //// I pass the state down from App as addListing... 
function checkForNewListing(addListing) {
  let allListings;
    if (addListing === true) {
    allListings = [...listings, addListing];
    setListings(allListings)
  } else {
    return allListings = listings;
  }
}

  const displayedListings = listings.filter(listing => {
    if (searchTerm === "") {
      return listing;
    } else {
      return listing.description.includes(searchTerm);
    }
  })


  // console.log("Displayed Listings: ", displayedListings);

  function renderListings() {
    return displayedListings.map((listing) => {
      return <ListingCard 
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      listing={listing}
      onDelete={handleDelete}
      />
    })
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderListings()}
        <ListingCard />
      </ul>
    </main>
  );
}

export default ListingsContainer;
