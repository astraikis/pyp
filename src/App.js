import React, { useState } from "react";

import BarcodeScannerComponent from "react-qr-barcode-scanner";

import Header from "./components/Header";
import Scanner from "./components/Scanner";
import List from "./components/List";

function App() {
  const [showScanner, setShowScanner] = useState(true);
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
      <Header />
      { showScanner && <Scanner showScanner={ showScanner } setShowScanner={ setShowScanner } setShowList={ setShowList } /> }
      { showList && <List /> }
    </div>
  );
}

export default App;
