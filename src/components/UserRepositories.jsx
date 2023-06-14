import React, { useState, useEffect } from "react";
import { fetchRepositories } from "../services/GithubAPI";

function UserRepositories({ username }) {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRepositories(username);
        setRepositories(data);
      } catch (error) {
        setRepositories([]);
        setError(error?.message || "An error occurred");
      }
    };

    fetchData();
  }, [username]);

  const handleView = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {repositories.map(({ id, name, html_url }) => (
            <li key={id}>
              {name}
              <button
                onClick={() => handleView(html_url)}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserRepositories;
