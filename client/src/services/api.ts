import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateSessionSchema } from '../components/SignIn/SignIn';
import { CreateUserSchema } from '../components/SignUp/SignUp';
import { Record } from '../types/record';
import { UserBaseInfo, UserSecure } from '../types/user';
export const wordBookApi = createApi({
  reducerPath: 'wordBookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Records'],
  endpoints: (builder) => ({
    createUser: builder.mutation<UserBaseInfo, CreateUserSchema>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
        credentials: 'include',
      }),
    }),
    getCurrentUser: builder.query<UserBaseInfo, void>({
      query: (user) => ({
        url: 'users/currentUser',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    createSession: builder.mutation<UserSecure, CreateSessionSchema>({
      query: (userCredentials) => ({
        url: 'sessions',
        method: 'POST',
        body: userCredentials,
        credentials: 'include',
      }),
    }),
    clearSession: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'sessions',
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
    createRecord: builder.mutation<Partial<Record>, Partial<Record>>({
      query: (record) => ({
        url: 'records',
        method: 'POST',
        body: record,
        credentials: 'include',
      }),
      invalidatesTags: [{ type: 'Records', id: 'LIST' }],
    }),
    // avoid this by using selectFromResult
    getRecordById: builder.query<Record, string>({
      query: (id) => ({
        url: `records/${id}`,
        method: 'GET',
        credentials: 'include',
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
        credentials: 'include',
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
  useClearSessionMutation,
  useGetCurrentUserQuery,
} = wordBookApi;
