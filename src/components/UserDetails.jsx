import React, { useState, useEffect } from "react";
import { fetchUserDetails } from "../services/GithubAPI";

function UserDetails({ username }) {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserDetails(username);
        setUserDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="mt-5">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="p-3 border rounded">
          {userDetails && (
            <div>
              <h2 className="text-2xl font-bold">{userDetails.name}</h2>
              <div className="flex items-center mt-2">
                <img
                  src={userDetails.avatar_url}
                  alt="Avatar"
                  className="w-16 h-16 mr-2 rounded-full"
                />
                <a
                  href={userDetails.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Username:</h3>
                <p>{userDetails.login}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-bold">Bio:</h3>
                <p>{userDetails.bio}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Contact:</h3>
                <p>
                  Email: {userDetails.email || "Not provided"}
                  <br />
                  Location: {userDetails.location || "Not provided"}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Stats:</h3>
                <p>
                  Followers: {userDetails.followers}
                  <br />
                  Following: {userDetails.following}
                  <br />
                  Public Repos: {userDetails.public_repos}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">Additional Information:</h3>
                <p>
                  Company: {userDetails.company || "Not provided"}
                  <br />
                  Blog: {userDetails.blog || "Not provided"}
                  <br />
                  Twitter: {userDetails.twitter_username || "Not provided"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
