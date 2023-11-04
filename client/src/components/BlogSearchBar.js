import React, { useState } from "react";

const BlogSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
      placeholder="Search Blogs"
      style={{
        width: isFocused ? "400px" : "300px",
        padding: "10px",
        border: isFocused ? "2px none" : "2px solid #313d4b",
        borderRadius: "25px",
        position: "relative",
        top: "10px", // Adjust this value to match your navigation bar's height
        display:"block",
        margin: "0 auto",
        // backgroundColor: isFocused ? "#313d4b" : "",
        color: "black",
        transition: "width 0.3s, background-color 0.3s",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        height: "40px", // Set the height to match the AppBar
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default BlogSearchBar;
