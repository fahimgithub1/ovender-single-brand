import { productsApi } from "@/pages/api/apiSlices";
import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlices from "./slices/cartItems";
import WishItemsSlices from "./slices/wishItems";
import PriceFilterSlices from "./slices/filterWithPrice";
import CustomerInfoSlices, { setToken } from "./slices/customerInfo";

const store = configureStore({
  reducer: {
    cartItems: cartItemsSlices,
    wishItems: WishItemsSlices,
    PriceProducts: PriceFilterSlices,
    customerInfo: CustomerInfoSlices,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
