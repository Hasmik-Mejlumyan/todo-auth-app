import {createAsyncThunk} from "@reduxjs/toolkit";
import userActionTypes from "./user.actionTypes";
import userService from "../../service/user.service";
import {ISignInActionReturnData} from "./types";
import {ISignInData} from "../../types";


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