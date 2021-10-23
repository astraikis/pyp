import axios from 'axios';

import { 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL
} from "../constants/productConstants";

export const getProduct = (code, { setShowList }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_REQUEST
        });

        var options = {
            method: 'GET',
            url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
            params: {upc: code},
            headers: {
              'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
              'x-rapidapi-key': 'f8618e6d16mshad8d1b96773f618p11ab2ajsn448a24405f51'
            }
        };

        axios.request(options).then(function (response) {
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: response.data
            })
            console.log(response.data);
        }).catch(function (error) {
            dispatch({
                type: PRODUCT_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
            })
        });

    } catch(error) {
        dispatch({
            type: PRODUCT_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

    setShowList(true);
};