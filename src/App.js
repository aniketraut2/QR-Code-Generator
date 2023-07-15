import React from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [qrVisible, setQrVisible] = useState(false);

  const generateQrCodeHandler = () => {
    if (!value) {
      return;
    }
    setQrVisible(true);
  };

  const clearInputHandler = () => {
    setValue("");
    setQrVisible(false);
  };

  return (
    <div className="container">
      <h1>QR Code Generator ☳</h1>
      <input
        type="text"
        placeholder="Type a URL..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={generateQrCodeHandler}>Generate QR Code</button>
      {qrVisible && (
        <div className="qr-container">
          <QRCode value={value} size={300} />
        </div>
      )}
      {qrVisible && (
  <button className="clear-button" onClick={clearInputHandler}>
    Clear
  </button>
)}

    </div>
  );
}

export default App;
