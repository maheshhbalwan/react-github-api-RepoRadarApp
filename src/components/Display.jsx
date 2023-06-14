import React, { useState } from "react";
import UserRepositories from "./userRepositories";
import UserDetails from "./userDetails";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

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
    <>
      <Navbar />{" "}
      <div className="p-3 border rounded">
        <p className="text-justify text-gray-600 ">
          The "Github Repo Radar" app is a web application that allows users to
          search for a GitHub username and retrieve information about the user's
          details and their repositories. It provides a convenient way to
          explore GitHub profiles and browse through the repositories of a
          specific user.
        </p>
        {/* Form for entering the username */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-4 md:flex-row md:justify-center"
        >
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 mb-2 mr-2 border border-gray-300 rounded md:mb-0 md:mr-0 md:w-auto"
          />

          <button type="submit" className="p-2 text-white bg-blue-500 rounded">
            Submit
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4 p-3 mt-5 border rounded md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">User Details</h2>

          {/* Render the UserDetails component only if a username is entered */}
          {username && <UserDetails username={username} />}
        </div>
        <div>
          <h2 className="text-2xl font-bold">List of Repos</h2>

          {/* Render the UserRepositories component only if a username is entered */}
          {username && <UserRepositories username={username} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Display;
