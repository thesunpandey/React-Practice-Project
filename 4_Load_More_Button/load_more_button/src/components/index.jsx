import { useEffect } from "react"; // Importing the useEffect hook from React
import { useState } from "react"; // Importing the useState hook from React
import "./style.css"; // Importing a CSS file named styles.css

// Defining the LoadMoreData component
export default function LoadMoreData() {
  // State variables using the useState hook
  const [loading, setLoading] = useState(false); // State for loading status
  const [products, setProducts] = useState([]); // State for storing products
  const [count, setCount] = useState(0); // State for tracking the count of loaded products
  const [disableButton, setDisableButton] = useState(false); // State for disabling the load more button

  // Asynchronous function to fetch products from an API
  async function fetchProducts() {
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch( // Fetching data from an API endpoint
        `https://dummyjson.com/products?limit=20&skip=${ // API URL with parameters for pagination
          count === 0 ? 0 : count * 20 // Calculating the skip value based on count
        }`
      );

      const result = await response.json(); // Parsing the JSON response

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]); // Updating products state with fetched data
        setLoading(false); // Set loading state to false
      }

      console.log(result); // Logging the result
    } catch (e) {
      console.log(e); // Handling errors and logging them
      setLoading(false); // Set loading state to false
    }
  }

  // useEffect hook to fetch products when count changes
  useEffect(() => {
    fetchProducts(); // Calling fetchProducts function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]); // Dependency array with count

  // useEffect hook to disable the button when products reach 100
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true); // Disabling the button when 100 products are loaded
  }, [products]); // Dependency array with products

  // Conditional rendering based on loading status
  if (loading) {
    return <div>Loading data! Please wait.</div>; // Displaying loading message
  }

  // Render JSX
  return (
    <div className="load-more-container"> {/* Main container */}
      <div className="product-container"> {/* Container for products */}
        {products && products.length // Conditional rendering based on products length
          ? products.map((item) => ( // Mapping through products array
              <div className="product" key={item.id}> {/* Product item */}
                <img src={item.thumbnail} alt={item.title} /> {/* Product image */}
                <p>{item.title}</p> {/* Product title */}
              </div>
            ))
          : null} {/* If products array is empty, render nothing */}
      </div>
      <div className="button-container"> {/* Container for load more button */}
        <button disabled={disableButton} onClick={() => setCount(count + 1)}> {/* Load more button */}
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null} {/* Conditional rendering for reaching 100 products */}
      </div>
    </div>
  );
}