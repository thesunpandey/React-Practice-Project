import { useState } from "react";
import QRCode from "react-qr-code"; // Import QRCode component

export default function QRCodeGenerator() {
  // Define state variables for the QR code value and user input
  const [qrCode, setQrCode] = useState(""); // QR code value
  const [input, setInput] = useState(""); // User input

  // Function to handle generating the QR code
  function handleGenerateQrCode() {
    // Set the QR code value to the user input
    setQrCode(input);
    // Clear the input field after generating the QR code
    setInput('');
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      {/* Input field for user to enter text */}
      <div>
        <input
          onChange={(e) => setInput(e.target.value)} // Update input state on change
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        {/* Button to trigger QR code generation */}
        <button
          disabled={input && input.trim() !== "" ? false : true} // Disable button if input is empty
          onClick={handleGenerateQrCode} // Call handleGenerateQrCode function on click
        >
          Generate
        </button>
      </div>
      {/* Display generated QR code */}
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}