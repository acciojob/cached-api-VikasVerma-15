import React, { useEffect, useMemo, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [apiUrl]);

  // cache API response
  const cachedData = useMemo(() => data, [data]);

  return (
    <div>
      {/* Do not remove the main div */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{cachedData.length} items fetched</p>
      )}
    </div>
  );
};

export default App;
