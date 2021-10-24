import React, { useState } from "react";
import { useSelector } from 'react-redux'

import BarcodeScannerComponent from "react-qr-barcode-scanner";

import Header from "./components/Header";
import Scanner from "./components/Scanner";
import List from "./components/List";
import Loader from "./components/Loader";

function App() {
  const productObject = useSelector(state => state.product);
  const { loading } = productObject;

  const [showScanner, setShowScanner] = useState(true);
  const [showList, setShowList] = useState(false);

  return (
    <div className="App">
      { (loading || showScanner) && <Loader /> }
      <Header />
      { showScanner && <Scanner showScanner={ showScanner } setShowScanner={ setShowScanner } setShowList={ setShowList } /> }
      { showList && <List setShowScanner={ setShowScanner } setShowList={ setShowList } /> }
    </div>
  );
}

export default App;
