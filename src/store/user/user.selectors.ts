import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../configureStore";

const usersState = (state: RootState) => state.user;

export const selectUser = createSelector(
  usersState,
  (state) => state.user
);

export const selectIsLoading = createSelector(
  usersState,
  (state) => state.isLoading
)

export const selectAccessToken = createSelector(
  usersState,
  (state) => state.accessToken
);