import "@/styles/globals.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import store from "../store/index";
import { productsApi } from "./api/apiSlices";

function App({ Component, pageProps }) {
  return (
    <ApiProvider api={productsApi}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApiProvider>
  );
}
export default App;

{
  /* <ApiProvider api={productsApi}>
        <div className="App">
          <Data />
        </div>
      </ApiProvider> */
}
