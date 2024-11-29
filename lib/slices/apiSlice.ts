import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CookieName } from '../utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api/',
  prepareHeaders: (headers,) => {
    const tokenName = CookieName.JWT_TOKEN;
    const tokenRegex = new RegExp(`(?:(?:^|.*;\\s*)${tokenName}\\s*=\\s*([^;]*).*$)|^.*$`);
    const token = document.cookie.replace(tokenRegex, "$1");
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
});
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    downloadMinutes: builder.query({
      query: (id) => `minutes/${id}`,
    }),
  }),
});

export const { useDownloadMinutesQuery } = api;
