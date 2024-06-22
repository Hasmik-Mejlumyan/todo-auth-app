import request from "../utils/request";
import {IResponse} from "./types";

const userService = {
  signIn<T, D> (data: D) {
    return request<IResponse<T>, D>("POST", "users/sign-in", data);
  },
  signUp<T, D> (data: D) {
    return request<IResponse<T>, D>("POST", "users/sign-up", data);
  },
  verifyEmail<T> (token: string) {
    return request<IResponse<T>>("POST", `users/verify-email/${token}`);
  }
};


export default userService;