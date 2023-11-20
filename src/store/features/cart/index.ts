import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const counterSlice  = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      // set to LS
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addDataFromLS: (state, action: PayloadAction<[]>) => {
      state.items = [...action.payload];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
        const productID = action.payload;
        // check if exist productID ib state
        const ifExist = state.items.indexOf(productID);
        // condition
        if (ifExist > -1){
            state.items = state.items.filter((item) => item != productID);
        }else{
            alert("Product was not found.")
        }

    },
    clearCart: (state) => {
        state.items = [];
        localStorage.setItem("cart", JSON.stringify(state.items));
    }
  },
});

// export reducer
export const { addItemToCart, addDataFromLS, removeFromCart, clearCart } = counterSlice.actions;
// export slice
export default counterSlice.reducer