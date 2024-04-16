// Importing the useState hook from React
import { useState } from "react";
// Importing the MenuList component from the "menu-list.js" file
import MenuList from "./menu_list";
// Importing the FaMinus and FaPlus icons from react-icons/fa
import { FaMinus, FaPlus } from 'react-icons/fa';

import PropTypes from 'prop-types';


// Defining the MenuItem functional component that takes a prop "item"
export default function MenuItem({ item }) {
  // State to manage whether the children of the current item are displayed
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Function to toggle the display of children when clicked
  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  // Logging the state for debugging
  console.log(displayCurrentChildren);

  return (
    // Rendering a list item
    <li>
      <div className="menu-item">
        {/* Displaying the label of the current menu item */}
        <p>{item.label}</p>
        {/* Checking if the current item has children */}
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {/* Rendering the plus or minus icon based on the state */}
            {
              displayCurrentChildren[item.label] ? 
                <FaMinus color="#fff" size={25} /> : 
                <FaPlus color="#fff" size={25} />
            }
          </span>
        ) : null}
      </div>

      {/* Rendering the MenuList component if the current item has children and they are displayed */}
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};