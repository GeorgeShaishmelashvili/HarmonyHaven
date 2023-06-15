import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cart-slice";
import UiSlice from "./ui-slice";

const Store = configureStore({
  reducer: { cartReducer: CartSlice.reducer, uiReducer: UiSlice.reducer },
});

export default Store;
