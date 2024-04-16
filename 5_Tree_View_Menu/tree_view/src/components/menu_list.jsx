import PropTypes from 'prop-types';
import MenuItem from "./menu_item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length ? 
        list.map((listItem) => 
          <MenuItem key={listItem.label} item={listItem} />
        ) 
      : 
        null
      }
    </ul>
  );
}

MenuList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  })),
};