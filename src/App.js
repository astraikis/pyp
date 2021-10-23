import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import Header from "./components/Header";
import Scanner from "./components/Scanner";

function App() {
  return (
    <div className="App">
      <Header />
      <Scanner />
    </div>
  );
}

export default App;
