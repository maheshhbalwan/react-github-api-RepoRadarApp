import React, { useState, useEffect } from "react";

const UserDetails = ({ username }) => {
  const [repositories, setRepositories] = useState([]); // State variable to store the repositories
  const [error, setError] = useState(null); // State variable to store the error message
  const [userDetails, setUserDetails] = useState(null); // State variable to store user details (username and avatar)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUserDetails({
            login: userData.login,
            id: userData.id,
            node_id: userData.node_id,
            avatar_url: userData.avatar_url,
            gravatar_id: userData.gravatar_id,
            url: userData.url,
            html_url: userData.html_url,
            followers_url: userData.followers_url,
            following_url: userData.following_url,
            gists_url: userData.gists_url,
            starred_url: userData.starred_url,
            subscriptions_url: userData.subscriptions_url,
            organizations_url: userData.organizations_url,
            repos_url: userData.repos_url,
            events_url: userData.events_url,
            received_events_url: userData.received_events_url,
            type: userData.type,
            site_admin: userData.site_admin,
            name: userData.name,
            company: userData.company,
            blog: userData.blog,
            location: userData.location,
            email: userData.email,
            hireable: userData.hireable,
            bio: userData.bio,
            twitter_username: userData.twitter_username,
            public_repos: userData.public_repos,
            public_gists: userData.public_gists,
            followers: userData.followers,
            following: userData.following,
            created_at: userData.created_at,
            updated_at: userData.updated_at,
          });
        } else {
          setError("User not found");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details");
      }
    };

    fetchUserData();
  }, [username]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        ); // Fetch repositories from the GitHub API

        if (response.ok) {
          const data = await response.json(); // Extract JSON data from the response
          setRepositories(data); // Update the repositories state with the fetched data
          setError(null); // Clear the error state if there was a previous error
        } else {
          setError("Repositories not found"); // Set the error state if the response is not successful (404)
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setError("Error fetching repositories");
      }
    };

    fetchRepositories(); // Call the fetchRepositories function when the component mounts or the username prop changes
  }, [username]);

  const handleView = (url) => {
    window.open(url, "_blank"); // Open the repository URL in a new browser tab
  };

  return (
    <div>
      {error ? (
        <div>
          <div
            className="p-4 mb-4 text-sm font-semibold rounded-lg text-red-50 bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {error}
          </div>
          <div
            className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            Warning alert!
          </div>
        </div>
      ) : (
        <div>
          {userDetails && (
            <div>
              <h2>{userDetails.login}</h2>
              <h2>ID: {userDetails.id}</h2>
              <h2>Node ID: {userDetails.node_id}</h2>
              <h2>Avatar URL:</h2>
              <img src={userDetails.avatar_url} alt="Avatar" />
              <h2>Gravatar ID: {userDetails.gravatar_id}</h2>
              <h2>URL: {userDetails.url}</h2>
              <h2>HTML URL: {userDetails.html_url}</h2>
              <h2>Followers URL: {userDetails.followers_url}</h2>
              <h2>Following URL: {userDetails.following_url}</h2>
              <h2>Gists URL: {userDetails.gists_url}</h2>
              <h2>Starred URL: {userDetails.starred_url}</h2>
              <h2>Subscriptions URL: {userDetails.subscriptions_url}</h2>
              <h2>Organizations URL: {userDetails.organizations_url}</h2>
              <h2>Repos URL: {userDetails.repos_url}</h2>
              <h2>Events URL: {userDetails.events_url}</h2>
              <h2>Received Events URL: {userDetails.received_events_url}</h2>
              <h2>Type: {userDetails.type}</h2>
              <h2>Site Admin: {userDetails.site_admin.toString()}</h2>
              <h2>Name: {userDetails.name}</h2>
              <h2>Company: {userDetails.company}</h2>
              <h2>Blog: {userDetails.blog}</h2>
              <h2>Location: {userDetails.location}</h2>
              <h2>Email: {userDetails.email}</h2>
              <h2>Hireable: {userDetails.hireable}</h2>
              <h2>Bio: {userDetails.bio}</h2>
              <h2>Twitter Username: {userDetails.twitter_username}</h2>
              <h2>Public Repos: {userDetails.public_repos}</h2>
              <h2>Public Gists: {userDetails.public_gists}</h2>
              <h2>Followers: {userDetails.followers}</h2>
              <h2>Following: {userDetails.following}</h2>
              <h2>Created At: {userDetails.created_at}</h2>
              <h2>Updated At: {userDetails.updated_at}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
