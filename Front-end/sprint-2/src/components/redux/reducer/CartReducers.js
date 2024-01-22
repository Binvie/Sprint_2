import {ADD_ITEMS, GET_CART_FROM_API, MINUS_ITEMS, PAY_CART, REMOVE_ITEMS} from "../actions/CartActions";

const initialState = {
    productArr: [],
    totalItem: 0,
    totalPrice: 0,
    address: "",
    phone: "",
};

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CART_FROM_API:
            const items = action.payload.length;
            if (items > 0) {
                let totalPrices = 0;
                action.payload.map(item => {
                    totalPrices += +item.productPrice * +item.quantity
                })
                return {
                    ...state,
                    productArr: action.payload,
                    totalItem: items,
                    address: action.payload[0].address,
                    phone: action.payload[0].phone,
                    totalPrice: totalPrices,
                }
            } else {
                return {
                    ...state,
                }
            }
        case ADD_ITEMS:
            const existingItem = state.productArr.map(item => (item.fruitsId === action.payload.productId));
            if (existingItem) {
                const nextTotalItem = state.totalItem + 1;
                return {
                    ...state,
                    totalItem: nextTotalItem,
                };
            }

            return {
                ...state,
                productArr: action.payload,
            };
        case MINUS_ITEMS:
            let totalPrices = 0;
            action.payload.map(item => {
                totalPrices += +item.productPrice * +item.quantity
            })
            const nextTotalItem = state.totalItem - 1;
            return {
                ...state,
                productArr: action.payload,
                totalPrice: totalPrices,
                totalItem: nextTotalItem
            }
        case REMOVE_ITEMS:
            const nextQuantity = state.totalItem - 1;
            return {
                ...state,
                totalItem: nextQuantity,
            }
        case PAY_CART:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}