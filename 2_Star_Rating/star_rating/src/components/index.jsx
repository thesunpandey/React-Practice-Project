// Import the useState hook from React for managing state in functional components
import { useState } from "react";
// Import PropTypes for type-checking React props
import PropTypes from "prop-types";
// Import FaStar component from react-icons library
import { FaStar } from "react-icons/fa";
// Import custom styles from external CSS file
import './style.css';


// Define PropTypes for the StarRating component
StarRating.propTypes = {
  // Validate that noOfStars is a number
  noOfStars: PropTypes.number,
};


// Define the StarRating component as a functional component that takes props
export default function StarRating({ noOfStars = 5 }) {
  // Initialize state variables for rating and hover states using useState hook
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  // Function to handle click event on stars
  function handleClick(getCurrentIndex) {
    // Update the rating state with the clicked star's index
    setRating(getCurrentIndex);
  }


  // Function to handle mouse enter event on stars
  function handleMouseEnter(getCurrentIndex) {
    // Update the hover state with the index of the star being hovered over
    setHover(getCurrentIndex);
  }


  // Function to handle mouse leave event on stars
  function handleMouseLeave() {
    // Reset the hover state to the current rating when mouse leaves the component
    setHover(rating);
  }


  // Render the StarRating component
  return (
    // Wrapper div with a class name for styling
    <div className="star-rating">
      {/* Render an array of stars based on the value of noOfStars */}
      {[...Array(noOfStars)].map((_, index) => {
        // Increment the index by 1 to start from 1 instead of 0
        index += 1;


        // Return a FaStar component for each star
        return (
          <FaStar
            // Set a unique key for each star element
            key={index}
            // Determine the class name based on whether the star is active or inactive
            className={index <= (hover || rating) ? "active" : "inactive"}
            // Set onClick event handler to update rating when a star is clicked
            onClick={() => handleClick(index)}
            // Set onMouseMove event handler to update hover state when mouse moves over a star
            onMouseMove={() => handleMouseEnter(index)}
            // Set onMouseLeave event handler to reset hover state when mouse leaves the component
            onMouseLeave={() => handleMouseLeave()}
            // Set the size of the star icon
            size={40}
          />
        );
      })}
    </div>
  );
}