import { 
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL
} from "../constants/productConstants";

export const productReducer = (state = {product:{}}, action) => {
    switch(action.type) {
        case PRODUCT_REQUEST:
            return { loading: true, product:{}}
        
        case PRODUCT_SUCCESS:
            return { loading: false, product: action.payload}

        case PRODUCT_FAIL:
            return { loading: false, error: action.payload}
        
        default:
            return state
    }
};