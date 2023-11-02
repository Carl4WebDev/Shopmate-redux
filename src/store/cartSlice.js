const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    
    name: "cartoon",
    initialState: {
        cartList: [],
        total: 0,
        numberOfSales: 1,
    },
    reducers: {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            const numberOfSales = state.numberOfSales + 1;
            console.log(state.numberOfSales)
            console.log(action.payload)

            return {...state, total: total, cartList: updatedCartList, numberOfSales: numberOfSales};
        },
        remove(state, action){
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            console.log(action.payload)
            return {...state, total: total, cartList: updatedCartList};
        }
    }
});



export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;