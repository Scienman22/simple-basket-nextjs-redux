import { configureStore } from '@reduxjs/toolkit'
import products from '@/redux/slices/products'
import basket from './slices/basket'

export const makeStore = () => {
    return configureStore({
        reducer: {
            productsList: products,
            basketItemsList: basket
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']