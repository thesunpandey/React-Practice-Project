import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";


export default function Tabs({ tabsContent, onChange }) {
  // State to track the index of the currently active tab
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // Function to handle tab click event
  function handleOnClick(getCurrentIndex) {
    // Update the state with the index of the clicked tab
    setCurrentTabIndex(getCurrentIndex);
    // Call the onChange callback provided by the parent component
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      {/* Tab header section */}
      <div className="heading">
        {/* Map through each tab item */}
        {tabsContent.map((tabItem, index) => (
          <div
            // Set class "active" if currentTabIndex matches the index of the tab
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            // Handle tab click event
            onClick={() => handleOnClick(index)}
            key={tabItem.label} // Use label as the key
          >
            {/* Display tab label */}
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      {/* Tab content section */}
      <div className="content" style={{ color: "red" }}>
        {/* Display content of the currently active tab */}
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}


// PropTypes validation for Tabs component
Tabs.propTypes = {
    tabsContent: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired
  };