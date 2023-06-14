import React, { useState } from "react";
import PublicRepos from "./PublicRepos";
import UserDetails from "../components/UserDetails";

function Display() {
  const [inputValue, setInputValue] = useState(""); // State variable to store the input value
  const [username, setUsername] = useState(""); // State variable to store the final username

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setUsername(inputValue); // Set the username to the final input value
      console.log("Submitted username:", inputValue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value state with the entered value in the input field
  };

  return (
    <div>
      <h1 className="p-5 text-3xl font-bold text-center">Github Repo Radar</h1>
      <h1 className="p-5 text-3xl font-bold text-center">Name : {username}</h1>

      {/* Form for entering the username */}
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="Enter username"
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 mr-2 border border-gray-300 rounded"
        />

        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Submit
        </button>
      </form>

      {/* Heading for the list of repositories */}
      <h1 className="p-5 text-3xl font-bold text-center">
        List of Repos Below
      </h1>

      {/* Render the PublicRepos component only if a username is entered */}
      {username && <PublicRepos username={username} />}

      {/* Heading for the user details */}
      <h1 className="p-5 text-3xl font-bold text-center">User Details Below</h1>
      {/* Render the UserDetails component only if a username is entered */}
      {username && <UserDetails username={username} />}
    </div>
  );
}

export default Display;
