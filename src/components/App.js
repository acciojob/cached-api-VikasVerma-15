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

  // Cache fetched posts
  const cachedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      {/* Do not remove the main div */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        cachedPosts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;

