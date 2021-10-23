import React from "react";
import { useDispatch, useSelector } from 'react-redux'

import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { getProduct } from '../actions/productActions';

function Scanner({ showScanner, setShowScanner, setShowList }) {
    const [code, setCode] = React.useState("Not Found");

    const dispatch = useDispatch()
    
    if (code !== 'Not Found') {
        dispatch(getProduct(code, { setShowList }))
        setShowScanner(false)
    };

    return (
        <div className='scanner-container'>
            <>
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                if (result) setCode(result.text);
                else setCode("Not Found");
                }}
                className='scanner'
            />
            </>
            <p>scan a barcode to check for potentially harmful ingredients</p>
        </div>
    );
};

export default Scanner;