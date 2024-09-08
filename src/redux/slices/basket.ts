import _ from "lodash";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { productType, basketItemType } from "@/types/product";

const initialState: {isBasketLoading:boolean, basketItemsList:basketItemType[]} = {
    isBasketLoading: false,
    basketItemsList: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<productType>) => {
            const existingProduct:basketItemType|undefined = _.find(state.basketItemsList, item => item.id === action.payload.id);
            
            if (existingProduct) {
                state.basketItemsList = state.basketItemsList.map(product => {
                    if (product.id === action.payload.id) {
                        product.quantity ++
                    }
                    return product
                })
            } else {
                state.basketItemsList.push({...action.payload, quantity: 1});
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const existingProduct:basketItemType|undefined = _.find(state.basketItemsList, item => item.id === action.payload);

            if (existingProduct && existingProduct.quantity > 1) {
                state.basketItemsList = state.basketItemsList.map(product => {
                    if (product.id === action.payload) {
                        product.quantity --
                    }
                    return product
                })
            } else {
                state.basketItemsList = _.filter(state.basketItemsList, item => item.id !== action.payload);
            }
        }
    }
})

export const { addProduct, removeProduct } = basketSlice.actions;
export const basket = (state: RootState) => (state.basketItemsList);
export default basketSlice.reducer;