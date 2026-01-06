import React, { useEffect, useMemo, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [apiUrl]);

  // Memoize fetched posts
  const cachedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      {/* Do not remove the main div */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        cachedPosts.map((post) => (
          <h4 key={post.id}>{post.title}</h4>
        ))
      )}
    </div>
  );
};

export default App;
