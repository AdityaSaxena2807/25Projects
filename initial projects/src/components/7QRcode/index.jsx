import React from "react";
import { QRCodeSVG } from "qrcode.react";
function QRcodeGenerator(/*if type='text' name are to be given by 
    parent component then they should be given here as props*/) {
  const [qrcode, setQRcode] = React.useState("");
  const [input, setInput] = React.useState("");
  const [isGenerated, setIsGenerated] = React.useState(false); // New state

  const handleGenerateQRcode = () => {
    setQRcode(input);
    setIsGenerated(true); 
    setInput("");
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="Qr code"     
          value={input}
          placeholder="Input text here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRcode}
        >
          Generate
        </button>
      </div>
      {isGenerated && (
        <div>
          <QRCodeSVG value={qrcode} size={200} bgColor="white" fgColor="black" />
          <button onClick={() => setIsGenerated(false)}>Clear QR</button>
        </div>
      )}
    </div>
  );
}

export default QRcodeGenerator;
