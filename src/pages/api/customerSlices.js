import { apiBaseSlices } from "./baseApi";

export const CustomerApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: (token) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: "api/addresses?token=true",
        };
      },
    }),

    Addaddresses: builder.mutation({
      query: ({address,token}) => {
        return {
          url: "api/addresses/create?token=true",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: address,
        };
      },
    }),

    getCartDatiles: builder.query({
      query: (token) => {
        return {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          url: "api/checkout/cart?token=true",
        };
      },
    }),

    updateAccount: builder.mutation({
      query: ({updateInfo ,token}) => {
        return {
          url: "api/customer/profile?token=true",
          method : 'PUT',
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: updateInfo
        };
      },
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useAddaddressesMutation,
  useGetCartDatilesQuery,
  useUpdateAccountMutation
} = CustomerApi;
