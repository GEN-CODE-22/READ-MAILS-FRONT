import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, AuthState } from "./slices/auth/auth_slice";

export interface StoreApp {
  auth: AuthState;
}

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
