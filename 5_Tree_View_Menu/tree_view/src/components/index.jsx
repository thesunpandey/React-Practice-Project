import PropTypes from "prop-types"; // Import PropTypes
import MenuList from "./menu_list";
import './styles.css';

// Defining the TreeView functional component that takes a prop "menus"
// with a default value of an empty array if not provided
export default function TreeView({ menus = [] }) {
  return (
    // Rendering a div with the class name "tree-view-container" for styling purposes
    <div className="tree-view-container">
      {/* Rendering the MenuList component and passing the "menus" prop as "list" */}
      <MenuList list={menus} />
    </div>
  );
}

// Add prop validation for the 'menus' prop
TreeView.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      children: PropTypes.array,
    })
  ).isRequired,
};
