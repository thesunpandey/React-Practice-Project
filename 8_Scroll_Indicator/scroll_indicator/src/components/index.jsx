// Importing useEffect and useState hooks from the React library
import { useEffect, useState } from "react";
// Importing CSS file for styling
import "./style.css";

// Defining the ScrollIndicator functional component
// eslint-disable-next-line react/prop-types
export default function ScrollIndicator({ url }) {
  // State variables to store data, loading status, error message, and scroll percentage
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Function to fetch data asynchronously from the provided URL
  async function fetchData(getUrl) {
    try {
      // Setting loading status to true
      setLoading(true);
      // Fetching data from the provided URL
      const response = await fetch(getUrl);
      // Parsing response as JSON
      const data = await response.json();
      // If data is received and contains products, update data state and set loading to false
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      // If an error occurs during fetching, log the error and set error message state
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  // useEffect hook to fetch data when URL changes
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Function to calculate and update scroll percentage
  function handleScrollPercentage() {
    // Calculating how much the page has scrolled
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    // Calculating total scrollable height
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculating and updating scroll percentage
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  // useEffect hook to add scroll event listener and calculate scroll percentage on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    // Cleanup function to remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  // Handling error case
  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  // Handling loading state
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  // Rendering the component with scroll progress tracking and fetched data
  return (
    <div>
      {/* Container for top section */}
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        {/* Container for scroll progress tracking */}
        <div className="scroll-progress-tracking-container">
          {/* Progress bar indicating current scroll percentage */}
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      {/* Container for displaying fetched data */}
      <div className="data-container">
        {/* Mapping through data and displaying each item's title */}
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <p key={index}>{dataItem.title}</p>
            ))
          : null}
      </div>
    </div>
  );
}