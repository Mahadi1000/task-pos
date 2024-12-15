import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import cartSlice from "./slices/cart.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
