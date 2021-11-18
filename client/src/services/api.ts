import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Record } from '../types/record';
import {
  UserBaseInfo,
  UserLoginInput,
  UserSecure,
  UserSignUpInput,
} from '../types/user';
export const wordBookApi = createApi({
  reducerPath: 'wordBookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Records'],
  endpoints: (builder) => ({
    createUser: builder.mutation<UserBaseInfo, UserSignUpInput>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    createSession: builder.mutation<UserSecure, UserLoginInput>({
      query: (userCredentials) => ({
        url: 'sessions',
        method: 'POST',
        body: userCredentials,
      }),
    }),
    createRecord: builder.mutation<Partial<Record>, Partial<Record>>({
      query: (record) => ({
        url: 'records',
        method: 'POST',
        body: record,
      }),
      invalidatesTags: [{ type: 'Records', id: 'LIST' }],
    }),
    // avoid this by using selectFromResult
    getRecordById: builder.query<Record, string>({
      query: (id) => ({
        url: `records/${id}`,
        method: 'GET',
        providesTags: (result: Partial<Record>, error: any, id: string) => [
          { type: 'Record', id },
        ],
        transformResponse: (response: { data: Record }) => response.data,
      }),
    }),
    getUserRecords: builder.query<Record[], void>({
      query: () => ({
        url: 'records',
        method: 'GET',
        providesTags: (result: Partial<Record>[], error: any, id: string) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: 'Records', id } as const)),
                { type: 'Records', id },
              ]
            : [{ type: 'Records', id }],
        transformResponse: (response: { data: Record[] }) => response.data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCreateSessionMutation,
  useCreateRecordMutation,
  useGetRecordByIdQuery,
  useGetUserRecordsQuery,
} = wordBookApi;
