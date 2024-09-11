import { RootState } from "@/redux/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { productType } from "@/types/product";

const initialState: {isProductsLoading:boolean, productsList:productType[]} = {
    isProductsLoading: false,
    productsList: []
};

export const fetchProductItem = createAsyncThunk(
    'products/productsList',
    async (productId: string, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`, {
                cache: "default"
            }).then (res => res.json());
        
            return {status: true, data: response, message: ""};
        } catch (error) {
            return rejectWithValue({status: false, data: error, message: "Something went wrong fetching product."});
        }
    }
)

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