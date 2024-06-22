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

export const selectVerificationEmail = createSelector(
  usersState,
  (state) => state.verificationEmail
);

export const selectIsVerificationEmailSent = createSelector(
  usersState,
  (state) => state.isVerificationEmailSent
);

export const selectIsEmailVerified = createSelector(
  usersState,
  (state) => state.isEmailVerified
);