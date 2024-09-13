import { RootState } from "@/redux/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface FilterBySliceType {
    categories: string[]
    selectedCategory: string[]
    search: string
    isLoading: boolean
}

const initialState: FilterBySliceType = {
    categories: [],
    selectedCategory: [],
    search: "",
    isLoading: false
}

export const fetchProductCategories = createAsyncThunk(
    'products/productCategories',
    async (_param:undefined, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category-list`, {
                cache: "default"
            }).then (res => res.json());
        
            return {status: true, data: response, message: ""};
        } catch (error) {
            return rejectWithValue({status: false, data: error, message: "Something went wrong fetching product categories."});
        }
    }
)

export const filterBySlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterByCategory: (state, action: PayloadAction<{categoryItem: string, isChecked: boolean}>) => {
            const {categoryItem, isChecked} = action.payload;

            if (isChecked && !_.includes(state.selectedCategory, categoryItem)) {
                state.selectedCategory.push(categoryItem)
            } else {
                state.selectedCategory = _.filter(state.selectedCategory, category => category !== categoryItem);
            }
        },
        filterBySearch: (state, action: PayloadAction<FilterBySliceType>) => {
            const {search} = action.payload;
            state.search = search;
        },
    },
    extraReducers: (builder) => {
        // STORE FETCHED CATEGORIES
        builder.addCase(fetchProductCategories.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data;
            state.isLoading = false;
        })
    }
})

export const { filterByCategory, filterBySearch } = filterBySlice.actions;
export const categoryfilterValue = (state: RootState) => (state.filteredBy);
export default filterBySlice.reducer;