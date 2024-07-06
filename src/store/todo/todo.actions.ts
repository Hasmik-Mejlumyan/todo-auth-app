import {createAsyncThunk} from "@reduxjs/toolkit";
import todoActionTypes from "./todo.actionTypes";
import {ITodo, ITodoData, ITodoWithoutDescription} from "../../types";
import todoService from "../../service/todo.service";

export const createTodo = createAsyncThunk<ITodo, ITodoData>(
  todoActionTypes.CREATE_TODO, async (data: ITodoData) => {
    try {
      const response = await todoService.createTodo<ITodo, ITodoData>(data);
      if (!response.data.success) {
        throw new Error(response.data.message || "Something went wrong");
      }
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
