const API_BASE_URL = "https://api.github.com";

export async function fetchRepositories(username) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}/repos`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 403) {
      throw new Error("Error fetching repositories: API Rate Limit Exceeded");
    }
  } catch (error) {
    if (error.status === 403) {
      throw new Error("API Rate Limit Exceeded");
    }
    if (error.status === 404) {
      throw new Error("User not found");
    } else {
      throw error;
    }
  }
}

export async function fetchUserDetails(username) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 403) {
      throw new Error("Error fetching user details: API Rate Limit Exceeded");
    }
  } catch (error) {
    if (error.status === 403) {
      throw new Error("API Rate Limit Exceeded");
    }
    if (error.status === 404) {
      throw new Error("User not found");
    } else {
      throw error;
    }
  }
}
