import { data } from "jquery";
import { apiBaseSlices } from "./baseApi";

export const CustomerApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    AddaddresSaveCard: builder.mutation({
      query: ({ saveAddress, token }) => {
        return {
          headers: {
            Accept: "application/json",
            // 'Authorization': `Bearer ${token}`,
          },
          url: "api/checkout/save-address",
          method: "POST",
          body: saveAddress,
        };
      },
    }),

    AddToCart: builder.mutation({
      query: (AddCartInfo) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${AddCartInfo.token}`,
          },
          url: `api/checkout/cart/add/${AddCartInfo.product_id}?token=true&product_id=${AddCartInfo.product_id}&quantity=${AddCartInfo.quantity}`,
          method: "POST",
        };
      },
    }),

    RemovespecificCart: builder.mutation({
      query: ({ cart_item_id, token }) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: `api/checkout/cart/remove-item/${cart_item_id}?token=true`,
        };
      },
    }),

    UpdateCart: builder.mutation({
      query: ({ data, token }) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Content-Type': "application/json"
          },
          url: `api/checkout/cart/update?token=true`,
          method: "PUT",
          body: JSON.stringify(data),
        };
      },
    }),

    AddToWishList: builder.mutation({
      query: ({ product_id, token }) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: `api/wishlist/add/${product_id}?token=true`,
        };
      },
    }),

    getWishList: builder.query({
      query: (token) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: "/api/wishlist?token=true",
        };
      },
    }),

    RemoveWishlist: builder.mutation({
      query: ({ product_id, token }) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: `api/wishlist/add/${product_id}?token=true`,
        };
      },
    }),
  }),
});

export const {
  useAddaddresSaveCardMutation,
  useAddToCartMutation,
  useRemovespecificCartMutation,
  useUpdateCartMutation,
  useAddToWishListMutation,
  useGetWishListQuery,
  useRemoveWishlistMutation,
} = CustomerApi;
