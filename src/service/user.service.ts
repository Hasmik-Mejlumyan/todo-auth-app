import request from "../utils/request";
import {IResponse} from "./types";

const userService = {
  signIn<T, D> (data: D) {
    return request<IResponse<T>, D>("POST", "users/sign-in", data);
  }
};


export default userService;