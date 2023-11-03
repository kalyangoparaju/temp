import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import BlogSearchBar from "../components/BlogSearchBar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  // Get all blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
        setFilteredBlogs(data?.blogs); // Set filteredBlogs initially
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // Callback function to filter blogs based on tags or display all blogs
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    const newFilteredBlogs = blogs.filter((blog) => {
      // Assuming tags is an array of strings in each blog
      return blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setFilteredBlogs(newFilteredBlogs);
  };

  return (
    <div>
      <BlogSearchBar onSearch={handleSearch} />

      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog?._id}
          id={blog?._id}
          isUser={localStorage.getItem("userId") === blog?.user?._id}
          title={blog?.title}
          description={blog?.description}
          image={blog?.image}
          username={blog?.user?.username}
          time={blog.createdAt}
          tags={blog?.tags}
        />
      ))}
    </div>
  );
};

export default Blogs;
