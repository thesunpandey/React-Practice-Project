import PropTypes from 'prop-types';

// Define the Suggestions component
export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length ? (
        data.map((item, index) => (
          <li onClick={handleClick} key={index}>
            {item}
          </li>
        ))
      ) : null}
    </ul>
  );
}

// PropTypes for type-checking the props
Suggestions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired
};