import PropTypes from "prop-types"; // Import PropTypes

// Define the Modal component
export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
}

// PropTypes validation for Modal component
Modal.propTypes = {
  id: PropTypes.string, // PropType for id, which is optional and should be a string
  header: PropTypes.node, // PropType for header, which is optional and can be any renderable content (string, element, etc.)
  body: PropTypes.node, // PropType for body, which is optional and can be any renderable content (string, element, etc.)
  footer: PropTypes.node, // PropType for footer, which is optional and can be any renderable content (string, element, etc.)
  onClose: PropTypes.func.isRequired // PropType for onClose, which is required and should be a function
};