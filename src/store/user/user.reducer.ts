import {createReducer} from "@reduxjs/toolkit";
import {IUserState} from "./types";
import userActionTypes from "./user.actionTypes";
import {signIn, signUp, verifyEmail} from "./user.actions";

const initialState: IUserState = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  verificationEmail: null,
  isVerificationEmailSent: false,
  isEmailVerified: false,
  isLoading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    // signIn
    .addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    })

    // signUp
    .addCase(signUp.fulfilled, (state, action) => {
      state.verificationEmail = action.payload.email;
      state.isVerificationEmailSent = true;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    })

    // verifyEmail
    .addCase(verifyEmail.fulfilled, (state, action) => {
      state.isEmailVerified = action.payload.isEmailVerified;
      state.error = null;
      state.isLoading = false;
    })
    .addCase(verifyEmail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(verifyEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    })

    // default state
    .addDefaultCase(state => state);
});

export default userReducer;