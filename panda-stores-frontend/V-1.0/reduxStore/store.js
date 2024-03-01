// stores all app's states
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
// stores multiple slices
export const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})

// connect the store to the application through redux provider
