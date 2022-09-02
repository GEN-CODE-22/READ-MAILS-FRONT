import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, AuthState } from "./slices/auth/auth_slice";
import { CorreosSlice, CorreosState } from "./slices/correos/correo_slice";
import { ModalSlice, ModalState } from "./slices/modal/modal_slice";

export interface StoreApp {
  auth: AuthState;
  correos: CorreosState;
  modal: ModalState;
}

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    correos: CorreosSlice.reducer,
    modal: ModalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
