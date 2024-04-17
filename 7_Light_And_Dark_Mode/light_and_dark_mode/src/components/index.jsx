// Importing the custom hook 'useLocalStorage' from the './useLocalStorage' file
import useLocalStorage from "./useLocalStorage";

// Importing the CSS file for styling
import './style.css';

// Defining the LightDarkMode functional component
export default function LightDarkMode() {
  // Initializing the 'theme' state variable using the 'useLocalStorage' hook
  // The 'theme' will be stored in local storage under the key 'theme'
  // The default value for 'theme' is set to 'dark'
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  // Function to handle toggling between light and dark themes
  function handleToggleTheme() {
    // If the current theme is 'light', set the theme to 'dark', else set it to 'light'
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Logging the current theme to the console
  console.log(theme);

  // Returning the JSX for the LightDarkMode component
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        {/* Displaying a simple message */}
        <p>Click below button to change the theme</p>
        {/* Button to toggle the theme */}
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}