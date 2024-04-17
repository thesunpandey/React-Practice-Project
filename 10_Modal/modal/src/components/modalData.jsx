import { useState } from "react";
import Modal from "."; // Importing the Modal component
import "./style.css"; // Importing CSS for modal styling

export default function ModalTest() {
  // State to manage the visibility of the modal
  const [showModalPopup, setShowModalPopup] = useState(false);

  // Function to toggle the visibility of the modal
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  // Function to close the modal
  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="button-container">
      {/* Button to toggle the modal visibility */}
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

      {/* Render the modal component only if showModalPopup is true */}
      {showModalPopup && (
        <Modal
          id={"custom-id"} // Unique ID for the modal
          header={<h1>Customized Header</h1>} // Customized header content
          footer={<h1>Customized Footer</h1>} // Customized footer content
          onClose={onClose} // Callback function to close the modal
          body={<div>Customized body</div>} // Customized body content
        />
      )}
    </div>
  );
}