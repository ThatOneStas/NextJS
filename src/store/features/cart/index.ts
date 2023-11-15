import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState{
    items: any[]
}

const initialState: cartState = {
    items: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addItemToCart: (state, action:PayloadAction<number>)=>{
        state.items.push(action.payload)
    },
  })

// export reducers
export const { addItemToCart, addDataFromLSd } = counterSlice.actions
// export slice
export default counterSlice.reducer