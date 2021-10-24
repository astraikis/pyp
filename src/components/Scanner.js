import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import BarcodeScannerComponent from "react-qr-barcode-scanner";

import { getProduct } from '../actions/productActions';

function Scanner({ showScanner, setShowScanner, setShowList }) {
    const [code, setCode] = useState("Not Found");
    const [showMore, setShowMore] = useState(false)

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
                height={375}
                onUpdate={(err, result) => {
                if (result) setCode(result.text);
                else setCode("Not Found");
                }}
                className='scanner'
            />
            </>
            <p>scan a barcode to check for potentially harmful ingredients!</p>

            <span onClick={() => setShowMore(!showMore)} className='learn-more'><p>learn more <i class="far fa-angle-double-down"></i></p></span>
            { showMore && <div className='learn-more-text'>
                <p>ingredients are flagged for a number of reasons including potential negative health effects, dangerous or unsustainable production techniques, and insufficient testing. i encourage you to do your own research to determine what ingredients you are comfortable with.</p>
            </div> }
        </div>
    );
};

export default Scanner;