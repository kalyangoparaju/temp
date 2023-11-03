// BlogSearchBar.js

import React, { useState } from "react";

const BlogSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search by tags..."
      style={{    
        width: "300px",   // Set the width of the input
      padding: "10px",   // Add padding for spacing
      border: "2px solid blue",  // Add a blue border
      borderRadius: "5px",  // Add border radius for rounded corners
      position: "relative",  // Position the input
      top: "5px",         // Center vertically
      left: "40%",        // Center horizontally
    //   transform: "translate(-50%, -50%)"
    }}
    />
  );
};

export default BlogSearchBar;
