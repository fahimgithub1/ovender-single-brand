import { createSlice } from "@reduxjs/toolkit";

const wushDate = {
  items: [],
  totalPrice: 0,
};

const WishItemsSlices = createSlice({
  name: "cartItems",
  initialState: wushDate,
  reducers: {
    addWishItems(state, action) {
      const newItem = action.payload.productInfo;
      const newQuantity = action.payload.quantity;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingCartItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity and price
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedCartItem = {
          ...existingCartItem,
          cartQuantity: existingCartItem.cartQuantity + newQuantity,
          cartPrice:
            Number(existingCartItem.price) +
            Number(newItem.price) * newQuantity,
        };
        state.items[existingCartItemIndex] = updatedCartItem;
      } else {
        // If the item doesn't exist in the cart, add it as a new item
        const newCartItem = {
          ...newItem,
          cartQuantity: 1,
          cartPrice: newItem.price,
        };
        state.items.push(newCartItem);
      }

      state.totalPrice += Number(newItem.price) * newQuantity;
    },

    removeWishItems(state, action) {
      const itemId = action.payload;

      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const deletedItem = state.items[itemIndex];
        state.totalPrice -= Number(deletedItem.cartPrice);
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export default WishItemsSlices.reducer;
export const { addWishItems,removeWishItems } = WishItemsSlices.actions;
