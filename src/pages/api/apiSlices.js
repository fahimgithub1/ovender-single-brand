import { apiBaseSlices } from "./baseApi";

export const productsApi = apiBaseSlices.injectEndpoints({
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => "api/dms/slider-images",
    }),

    getAllProducts: builder.query({
      query: () => "api/products",
    }),

    getProductsName: builder.query({
      query: (productName) => `api/products?name=${productName}`,
    }),

    getSingleProducts: builder.query({
      query: (id) => `api/products/${id}`,
    }),

    getRelatedProducts: builder.query({
      query: (id) => `api/dms/similar-products/${id}`,
    }),

    createProductReview: builder.mutation({
      query: (review) => ({
        url: `api/reviews/${review.product_id}/create?product_id=${review.product_id}&rating=${review.rating}&title=${review.title}&comment=${review.comment}&name=${review.name}`,
        method: "POST",
        // body:,
      }),
    }),

    getAllCategoris: builder.query({
      query: () => "api/categories?limit=20",
      transformResponse: (response) => {
        const data = response.data;
        data.pop();
        return {
          ...response,
          data,
        };
      },
    }),

    getCategorisChild: builder.query({
      query: () => "api/dms/categories",
      transformResponse: (response) => {
        const data = response.data;
        // data.pop();
        return {
          ...response,
          data,
        };
      },
    }),

    getCategoriProducts: builder.query({
      query: (productParameters) => `api/products?category_id=${productParameters.categorID}`,
    }),

    getFilterProducts: builder.query({
      query: ({productParameters, price}) => `api/products?category_id=${productParameters.categorID}&price=${price}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsNameQuery,
  useGetProductsWithPriceQuery,
  useGetCategoriProductsQuery,
  useGetFilterProductsQuery,
  useCreateProductReviewMutation,
  useGetRelatedProductsQuery,
  useGetSingleProductsQuery,
  useGetAllCategorisQuery,
  useGetCategorisChildQuery,
  useGetSliderQuery,
} = productsApi;
