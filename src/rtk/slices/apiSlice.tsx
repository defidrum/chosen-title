import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'v1' }),
  endpoints: (builder) => ({
    getDataFromEndpoint: builder.query({
      query: () => 'urlWithData',
    }),
  })
});

// When you need to call your data from your api endpoint you will use a hook to do so.
// For example look at the below query
// export const { useLazyGetSomeDataFromEndpointQuery } = apiSlice;
// export const { useGetSomeDataFromEndPointQuery } = apiSlice;
