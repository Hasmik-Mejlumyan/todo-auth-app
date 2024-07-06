import request from "../utils/request";
import {IResponse} from "./types";

const todoService = {
  createTodo<T, D> (data: D) {
    return request<IResponse<T>, D>("POST", "todos", data);
  },
}

export default todoService;