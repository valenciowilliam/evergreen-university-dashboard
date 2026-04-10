import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FetchData.css";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        // We take the first 6 posts to keep the grid clean
        setPosts(response.data.posts.slice(0, 6)); 
      } catch (err) {
        setError("Failed to fetch campus updates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Use the CSS classes for these states
  if (loading) {
    return (
      <div className="fetch-container">
        <h2 className="loading-text">Fetching latest news...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fetch-container">
        <h2 className="error-text">{error}</h2>
      </div>
    );
  }

  return (
    <div className="fetch-container">
      <h2>Latest Articles</h2>

      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            {/* Added the Read Full Article button */}
            <button className="read-more">Read Full Article</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;