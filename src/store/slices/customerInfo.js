import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getTokens = createAsyncThunk("auth/getToken", async () => {
//   const token = localStorage.getItem("token");
  
//   const [customer] = useGetCustomerDetailsMutation();
//   customer(state.token)
//   .unwrap()
//   .then((response) => {
//     console.log(response);
//     state.customer = response.data
//   })

//   return token;
// });

const isBrowser = typeof window !== 'undefined';

const customerInfo = {
  customer: [],
  token:  isBrowser ? localStorage.getItem('token') : null,
};


const CustomerInfoSlices = createSlice({
  name: "PriceFilterProduct",
  initialState: customerInfo,
  reducers: {
    setToken(state, action) {
      return {
        token: action.payload.token,
        if (isBrowser) {
          localStorage.setItem('token', action.payload);
        }
      };
    },

    getCustomer(state, action) {
      return {
        customer : action.payload
      };
    },
  },
});

export default CustomerInfoSlices.reducer;
export const { setToken, getCustomer } = CustomerInfoSlices.actions;

