import React, { useState, useEffect } from "react";

function AddListing( { onAddListing }) {

  const [descriptionInput, setDescriptionInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [locationInput, setLocationInput] = useState("")

    const furby_URL = "https://static2.thetalkoimages.com/wordpress/wp-content/uploads/2020/06/long-furby-again.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5"
 

console.log(descriptionInput);

  

  // useEffect(() => {
  //   fetch("http://localhost:6001/listings")
  //   .then(resp => resp.json())
  //   .then(listings => {
  //     setListings(listings);
  //   })
  // },[])


  function handleSubmit(e) {
    e.preventDefault();
        
      const newListingObj = {
        "description": descriptionInput,
        "image": imageInput,
        "location": locationInput
      };

      // console.log("submitted", newListingObj);
  
      fetch("http://localhost:6001/listings", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(newListingObj)  
      })
      .then(resp => resp.json())
      .then(item => console.log(item))
  
    


    onAddListing(newListingObj);
  }

  return (
    <form className="AddListingbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="Description"
        placeholder="Item description"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
      />
        <input
        type="text"
        id="Image"
        placeholder="Item image URL"
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
      />
        <input
        type="text"
        id="Location"
        placeholder="Item location"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default AddListing;
