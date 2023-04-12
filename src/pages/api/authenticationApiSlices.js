import { apiBaseSlices } from "./baseApi";

export const AuthenticatinApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    LoginAuthentic: builder.mutation({
      query: (loginInfo) => ({
        url: `api/customer/login?token=true&email=${loginInfo.email}&password=${loginInfo.password}`,
        method: "POST",
      }),
    }),

    getLogout: builder.query({
      query: (token) => {
        return {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          url: 'api/customer/logout?token=true',
        };
      },
    }),

    ForgotPassword: builder.mutation({
      query: (email) => ({
        headers: {
          Accept: "application/json",
        },
        url: `api/customer/forgot-password?email=${email}`,
        method: "POST",
      }),
    }),

    Register: builder.mutation({
      query: (userInfo) => ({
        url: `api/v1/customer/register`,
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }),
    }),

    GetCustomerDetails: builder.mutation({
      query: (token) => ({
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        url: `api/customer/get?token=true`,
      }),
    }),
  }),
});

export const {
  useLoginAuthenticMutation,
  useGetLogoutQuery,
  useForgotPasswordMutation,
  useRegisterMutation,
  useGetCustomerDetailsMutation,
} = AuthenticatinApi;
