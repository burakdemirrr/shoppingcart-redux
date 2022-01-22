import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const pseudoID = (new Date()).getTime();

            state.cartItems.push({
                id: pseudoID,
                productID: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price
            });

        },
        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        }


    }
})
export const getCartItems = state => state.cart.cartItems;

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0);
}



export const { addItemToCart ,removeFromCart} = slice.actions;
export default slice.reducer;