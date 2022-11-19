import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://629e18843dda090f3c133edb.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    delContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDelContactMutation,
  useAddContactMutation,
} = contactsApi;
