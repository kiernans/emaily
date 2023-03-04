import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
	id: string;
	credits: number;
};

const authApi = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	tagTypes: ['User'],
	endpoints(builder) {
		return {
			fetchUser: builder.query<User, void>({
				providesTags: ['User'],
				query: () => {
					return {
						url: 'api/current_user',
						method: 'GET',
					};
				},
			}),
			handleToken: builder.mutation({
				invalidatesTags: ['User'],
				query: (token: any) => {
					return {
						url: 'api/stripe',
						body: {
							token,
						},
						method: 'POST',
					};
				},
			}),
		};
	},
});

export const { useFetchUserQuery, useHandleTokenMutation } = authApi;

export { authApi };
