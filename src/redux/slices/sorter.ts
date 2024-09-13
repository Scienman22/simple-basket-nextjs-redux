import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SortBySliceType {
    price: string | 'asc' | 'desc' | 'relevant'
}

const initialState: SortBySliceType = {
    price: 'relevant',
}

export const sortBySlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortBy: (state, action: PayloadAction<SortBySliceType>) => {
            const {price} = action.payload;
            state.price = price;
        }
    }
})

export const { sortBy } = sortBySlice.actions;
export const sortProductValue = (state: RootState) => (state.sortBy);
export default sortBySlice.reducer;