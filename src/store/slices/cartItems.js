import { createSlice } from "@reduxjs/toolkit";

const cartDate = {
  items: [],
  totalPrice: 0,
};

const cartItemsSlices = createSlice({
  name: "cartItems",
  initialState: cartDate,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload.productInfo;
      
      // const newQuantity = action.payload.quantity;
      // const existingCartItemIndex = state.items.findIndex(
      //   (item) => item.id === newItem.id
      // );

      // if (existingCartItemIndex !== -1) {
      //   // If the item already exists in the cart, update its quantity and price
      //   const existingCartItem = state.items[existingCartItemIndex];
      //   const updatedCartItem = {
      //     ...existingCartItem,
      //     cartQuantity: existingCartItem.cartQuantity + newQuantity,
      //     cartPrice:
      //       Number(existingCartItem.price) +
      //       Number(newItem.price) * newQuantity,
      //   };
      //   state.items[existingCartItemIndex] = updatedCartItem;
      // } else {
      //   // If the item doesn't exist in the cart, add it as a new item
      //   const newCartItem = {
      //     ...newItem,
      //     // cartQuantity: 1,
      //     // cartPrice: newItem.price,
      //   };
      //   state.items.push(newItem.items);
      // state.totalPrice += Number(newItem.price) * newQuantity;
      // }

      state.items.push(newItem.items);
      state.totalPrice = newItem.sub_total;
    },

    removeItemsSummary(state, action) {
      const itemId = action.payload;

      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const deletedItem = state.items[itemIndex];
        state.totalPrice -= Number(deletedItem.cartPrice);
        state.items.splice(itemIndex, 1);
      }
    },

    removeItems(state, action) {
      const { itemId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        const newQuantity = item.cartQuantity - quantity;
        if (newQuantity > 0) {
          const newCartPrice = Number(item.price) * newQuantity;
          const deltaCartPrice = Number(item.cartPrice) - newCartPrice;
          state.items[itemIndex] = {
            ...item,
            cartQuantity: newQuantity,
            cartPrice: newCartPrice,
          };
          state.totalPrice -= deltaCartPrice;
        } else {
          state.totalPrice -= Number(item.cartPrice);
          state.items.splice(itemIndex, 1);
        }
      }
    },

    addItemsCart(state, action) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        const updateCartPrice = Number(item.price) + Number(item.cartPrice);

        state.items[itemIndex] = {
          ...item,
          cartQuantity: item.cartQuantity + 1,
          cartPrice: updateCartPrice,
        };
        state.totalPrice += Number(item.price);
      }
    },

    clearItems(state, action) {
      if (action.type === "CLEAR") {
        return cartDate;
      }
    },
  },
});

export default cartItemsSlices.reducer;
export const { addItems, removeItems, addItemsCart, removeItemsSummary } =
  cartItemsSlices.actions;
