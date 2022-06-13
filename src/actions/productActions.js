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
              'x-rapidapi-key': '///'
            }
        };

        axios.request(options).then(function (response) {
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: response.data
            })
            setShowList(true);
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

};
