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
    <div className="mt-5">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul className="list-disc list-inside">
          {repositories.map(({ id, name, description, html_url, language }) => (
            <li
              key={id}
              className="flex items-center justify-between p-3 mt-2 border rounded"
            >
              <div>
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{description}</p>
                {language && (
                  <span className="text-xs text-gray-500">{language}</span>
                )}
              </div>
              <button
                onClick={() => handleView(html_url)}
                className="px-4 py-2 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
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
