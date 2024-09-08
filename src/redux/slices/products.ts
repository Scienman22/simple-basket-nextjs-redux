import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { productType } from "@/types/product";

const initialState: {isProductsLoading:boolean, productsList:productType[]} = {
    isProductsLoading: false,
    productsList: [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 15 },
        { id: 3, name: "Product 3", price: 20 }
    ]
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export const {  } = productsSlice.actions;
export const products = (state: RootState) => (state.productsList);
export default productsSlice.reducer;