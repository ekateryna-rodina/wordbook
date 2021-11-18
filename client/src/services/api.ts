import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecord } from '../types/record';
import { IUser } from '../types/user';
export const wordBookApi = createApi({
  reducerPath: 'wordBookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      transformResponse: (response: { data: IUser }) => response.data,
    }),
    createSession: builder.mutation<Partial<IUser>, string>({
      query: (userCredentials) => ({
        url: 'sessions',
        method: 'POST',
        body: userCredentials,
      }),
    }),
    createRecord: builder.mutation<Partial<IRecord>, Partial<IRecord>>({
      query: (record) => ({
        url: 'records',
        method: 'POST',
        body: record,
      }),
    }),
    getRecordById: builder.query<string, IRecord>({
      query: ({ id }) => ({
        url: `records/${id}`,
        method: 'GET',
      }),
    }),
    getUserRecords: builder.query<null, IRecord[]>({
      query: () => ({
        url: 'records',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCreateSessionMutation,
  useCreateRecordMutation,
} = wordBookApi;
