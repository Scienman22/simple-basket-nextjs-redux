import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { productType } from "@/types/product";

const initialState: {isProductsLoading:boolean, productsList:productType[]} = {
    isProductsLoading: false,
    productsList: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        storeProducts: (state, action: PayloadAction<productType[]>) => {
            state.productsList = action.payload;
        },
        productOnBasket: (state, action: PayloadAction<{id:number, do:"added"|"removed"}>) => {
            state.productsList = state.productsList.map(product => {
                if (product.id === action.payload.id) {
                    if (action.payload.do === "added") {
                        product.stock --
                    } else {
                        product.stock ++
                    }
                }
                return product
            })
        }
    }
})

export const { storeProducts, productOnBasket } = productsSlice.actions;
export const products = (state: RootState) => (state.productsList);
export default productsSlice.reducer;