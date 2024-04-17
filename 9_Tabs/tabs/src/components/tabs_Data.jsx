// File: TabTest.js

// Importing the Tabs component from the current directory
import Tabs from '.';
// Importing the CSS file for styling the tabs
import './style.css';

// Defining a simple component to be used as content for one of the tabs
function RandomComponent() {
  return <h1>Hey there! I am Tab 3</h1>;
}

// Another simple component to be used as content for one of the tabs
function AnotherComponent() {
  return <div>This is content for another tab</div>;
}

// Defining the TabTest component
export default function TabTest() {
  // Array of tabs with label and content
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <div className="tab-content">
          <h2>Tab 1 Content</h2>
          <p>This is some content for Tab 1.</p>
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div className="tab-content">
          <h2>Tab 2 Content</h2>
          <p>This is some content for Tab 2.</p>
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: <RandomComponent />, // Using the RandomComponent as content
    },
    {
      label: "Tab 4",
      content: <AnotherComponent />, // Using AnotherComponent as content
    },
    {
      label: "Tab 5",
      content: (
        <div className="tab-content">
          <h2>Tab 5 Content</h2>
          <p>This is some content for Tab 5.</p>
        </div>
      ),
    },
  ];

  // Function to handle tab change
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  // Rendering the Tabs component with the specified tabs and change handler
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}