// Importing necessary modules from React
import { useEffect } from "react";
import { useState } from "react";
// Importing the User component from a local file
import User from "./user";
// Importing styles from an external CSS file
import './style.css';

// Defining the main component, GithubProfileFinder
export default function GithubProfileFinder() {
  // Using useState hook to manage state variables
  const [userName, setUserName] = useState("thesunpandey"); // State variable for storing the input username
  const [userData, setUserData] = useState(null); // State variable for storing fetched user data
  const [loading, setLoading] = useState(true); // State variable for loading status

  // Async function to fetch user data from GitHub API
  async function fetchGithubUserData() {
    setLoading(true); // Set loading to true while fetching data
    // Fetching user data from GitHub API using the input username
    const res = await fetch(`https://api.github.com/users/${userName}`);
    // Parsing response data as JSON
    const data = await res.json();
    // If data is retrieved successfully
    if (data) {
      // Update userData state with fetched user data
      setUserData(data);
      // Set loading to false once data is fetched
      setLoading(false);
      // Clear the input field after fetching data
      setUserName('');
    }
  }

  // Function to handle form submission
  function handleSubmit() {
    fetchGithubUserData(); // Call fetchGithubUserData function when the form is submitted
  }

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    fetchGithubUserData(); // Fetch user data when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Conditional rendering based on loading status
  if (loading) {
    return <h1>Loading data ! Please wait</h1>; // Display loading message if data is being fetched
  }

  // Rendering the main component
  return (
    <div className="github-profile-container">
      {/* Input field for searching GitHub username */}
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          // Update username state on input change
          onChange={(event) => setUserName(event.target.value)}
        />
        {/* Button to trigger form submission */}
        <button onClick={handleSubmit}>Search</button>
      </div>
      {/* Render the User component with fetched user data if available */}
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}