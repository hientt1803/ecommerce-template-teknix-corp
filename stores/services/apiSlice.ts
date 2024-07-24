import {
  createApi,
  fakeBaseQuery,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// Create the Firestore API using createApi
export const SilkyApi = createApi({
  reducerPath: "SilkyApi",
  // baseQuery: fakeBaseQuery(),
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({

  }),
});

// Export hooks for using the created endpoint
// export const { useFetchDataFromDbQuery } = SilkyApi;
