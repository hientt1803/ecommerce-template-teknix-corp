import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: [],
  endpoints: (builder) => ({
    getListProduct: builder.query({
      // name is the actual pokemon name - we used Bulbasaur in the example
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id: number) => `products/${id}`,
    }),
    // add more queries in the api
  }),
});

// Export hooks for usage in functional components
export const { useLazyGetListProductQuery, useLazyGetProductByIdQuery } =
  pokemonApi;
