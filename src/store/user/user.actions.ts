import {createAsyncThunk} from "@reduxjs/toolkit";
import userActionTypes from "./user.actionTypes";
import userService from "../../service/user.service";
import {ISignInActionReturnData, ISignUpActionReturnData, IVerifyEmailActionReturnData} from "./types";
import {ISignInData, ISignUpData} from "../../types";


export const signIn = createAsyncThunk<ISignInActionReturnData, ISignInData>(userActionTypes.SIGN_IN, async (data) => {
  try {
    const response = await userService.signIn<ISignInActionReturnData, ISignInData>(data);

    if (!response.data.success) {
      throw new Error(response.data.message || "Something went wrong");
    }

    localStorage.setItem("accessToken", response.data.data.accessToken);
    console.log(response.data)

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error.message;
  }
});

export const signUp = createAsyncThunk<ISignUpActionReturnData, ISignUpData>(userActionTypes.SIGN_UP, async (data) => {
  try {
    const response = await userService.signUp<ISignUpActionReturnData, ISignUpData>(data);

    if (!response.data.success) {
      throw new Error(response.data.message || "Something went wrong");
    }

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error.message;
  }
});

export const verifyEmail = createAsyncThunk<IVerifyEmailActionReturnData, string>(userActionTypes.VERIFY_EMAIL, async (token) => {
  try {
    const response = await userService.verifyEmail<IVerifyEmailActionReturnData>(token);

    if (!response.data.success) {
      throw new Error(response.data.message || "Something went wrong");
    }

    return response.data.data;
  } catch (error: any) {
    console.log(error);
    throw error.message;
  }
});