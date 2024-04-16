import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; // Import arrow icons
import PropTypes from "prop-types"; // Import PropTypes
import "./style.css"; // Import CSS file


export default function ImageSlider({ url, limit = 5, page = 1 }) {
  // State variables
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);


  // Function to fetch images from URL
  async function fetchImages(getUrl) {
    try {
      setLoading(true);


      // Fetch images with specified page and limit
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();


      if (data) {
        setImages(data); // Set fetched images to state
        setLoading(false); // Set loading to false after fetching
      }
    } catch (e) {
      setErrorMsg(e.message); // Set error message if fetch fails
      setLoading(false); // Set loading to false after fetch failure
    }
  }


  // Function to handle previous slide
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }


  // Function to handle next slide
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }


  // Fetch images when URL changes
  useEffect(() => {
    if (url !== "") fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);


  console.log(images);


  // Loading state
  if (loading) {
    return <div>Loading data! Please wait</div>;
  }


  // Error state
  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }


  // Render the image slider
  return (
    <div className="container">
      {/* Left arrow */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {/* Images */}
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      {/* Right arrow */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      {/* Circle indicators */}
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}


// Prop validation
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number, // Add this line for the 'limit' prop
  page: PropTypes.number
};