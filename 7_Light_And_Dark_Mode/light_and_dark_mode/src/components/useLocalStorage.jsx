// Importing useEffect and useState hooks from the React library
import { useEffect } from "react";
import { useState } from "react";

// Creating a custom hook named useLocalStorage, which takes in a key and a defaultValue
export default function useLocalStorage(key, defaultValue) {
  // Using the useState hook to create a state variable 'value' and a function 'setValue' to update it
  const [value, setValue] = useState(() => {
    // Initializing a variable 'currentValue'
    let currentValue;

    // Using a try-catch block to handle potential errors when parsing data from localStorage
    try {
      // Attempting to parse the value stored in localStorage with the provided key
      // If the value is not found, or if an error occurs during parsing, fallback to the defaultValue
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      // Logging any errors that occur during parsing
      console.log(error);
      // Setting currentValue to the defaultValue if an error occurs
      currentValue = defaultValue;
    }

    // Returning the initial value of the state variable 'value'
    return currentValue;
  });

  // Using the useEffect hook to perform side effects when 'key' or 'value' changes
  useEffect(() => {
    // Storing the current value in localStorage using the provided key
    localStorage.setItem(key, JSON.stringify(value));
    // Specifying dependencies for the effect: 'key' and 'value'
  }, [key, value]);

  // Returning an array containing the current value and the function to update it
  return [value, setValue];
}