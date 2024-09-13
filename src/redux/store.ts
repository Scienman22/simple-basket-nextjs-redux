import { configureStore } from '@reduxjs/toolkit'
import products from '@/redux/slices/products'
import basket from './slices/basket'
import filterByReducer from './slices/filters'
import sortByReducer from './slices/sorter'

export const makeStore = () => {
    return configureStore({
        reducer: {
            productsList: products,
            basketItemsList: basket,
            sortBy: sortByReducer,
            filteredBy: filterByReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']