import {createReducer} from "@reduxjs/toolkit";
import {IUserState} from "./types";
import userActionTypes from "./user.actionTypes";
import {signIn} from "./user.actions";
import {sign} from "node:crypto";

const initialState: IUserState = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
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

    // default state
    .addDefaultCase(state => state);
});

export default userReducer;