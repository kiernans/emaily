import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './apis/authApi';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(authApi.middleware);
	},
});

setupListeners(store.dispatch);

export { useFetchUserQuery, useHandleTokenMutation } from './apis/authApi';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
