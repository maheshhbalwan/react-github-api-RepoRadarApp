import React, { useState, useEffect } from "react";

function PublicRepos({ username }) {
  const [repositories, setRepositories] = useState([]); // State variable to store the repositories

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        ); // Fetch repositories from the GitHub API

        if (response.ok) {
          const data = await response.json(); // Extract JSON data from the response
          setRepositories(data); // Update the repositories state with the fetched data
        } else {
          setRepositories([]); // Set an empty array for repositories if the response is not successful (404)
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setRepositories([]); // Set an empty array for repositories in case of an error
      }
    };

    fetchRepositories(); // Call the fetchRepositories function when the component mounts or the username prop changes
  }, [username]);

  const handleView = (url) => {
    window.open(url, "_blank"); // Open the repository URL in a new browser tab
  };

  return (
    <div>
      {repositories.length === 0 ? (
        <div>
          <div
            className="p-4 mb-4 text-sm font-semibold rounded-lg text-red-50 bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            Repositories not found
          </div>
        </div>
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

export default PublicRepos;
