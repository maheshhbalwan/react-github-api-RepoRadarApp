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
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {userDetails && (
            <div>
              <h2>{userDetails.login}</h2>
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
}

export default UserDetails;
