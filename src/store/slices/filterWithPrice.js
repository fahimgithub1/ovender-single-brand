import { createSlice } from "@reduxjs/toolkit";

const PriceFilterProduct = {
  quantity: 0,
  price: "",
  // shortMethod: "Default",
  products: {},
};

const PriceFilterSlices = createSlice({
  name: "PriceFilterProduct",
  initialState: PriceFilterProduct,
  reducers: {
    FilterWithPrice(state, action) {
      return {
        price: action.payload.filterInfo,
        quantity: action.payload.quantity,
      };
    },
    setQuentity(state, action) {
      return {
        quantity: action.payload,
        price: state.price,
        products: state.products,
      };
    },
    setProduct(state, action) {
      return {
        products: action.payload,
        price: state.price,
        quantity: state.quantity,
      };
    },
    setShortMethod(state, action) {
      let updateProduct = "";
      if (action.payload === "A - Z") {
        if (state.products && state.products.length > 0) {
          const sortedData = [...state.products].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          updateProduct = sortedData;
        }
        return {
          ...state,
          products: updateProduct,
        };
      }
      if (action.payload === "Z - A") {
        if (state.products && state.products.length > 0) {
          const sortedData = [...state.products].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          updateProduct = sortedData;
        }
        return {
          ...state,
          products: updateProduct,
        };
      }
      if (action.payload === "Lowest") {
        if (state.products && state.products.length > 0) {
          const sortedData = [...state.products].sort(
            (a, b) => a.price - b.price
          );
          updateProduct = sortedData;
        }
        return {
          ...state,
          products: updateProduct,
        };
      }
      if (action.payload === "Height") {
        if (state.products && state.products.length > 0) {
          const sortedData = [...state.products].sort(
            (a, b) => b.price - a.price
          );
          updateProduct = sortedData;
        }
        return {
          ...state,
          products: updateProduct,
        };
      }
      return state;
    },
  },
});

export default PriceFilterSlices.reducer;
export const {
  FilterWithPrice,
  setQuentity,
  setPrice,
  setProduct,
  setShortMethod,
} = PriceFilterSlices.actions;
