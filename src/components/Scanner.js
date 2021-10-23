import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function Scanner() {
    const [data, setData] = React.useState("Not Found");
    var code = ''

    return (
        <div className='scanner'>
        <>
        <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
            }}
            className='scanner'
        />
        <p>{data}</p>
        </>
        </div>
    );
};

export default Scanner;