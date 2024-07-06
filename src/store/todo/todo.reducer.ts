import {createReducer} from "@reduxjs/toolkit";
import {ITodoState} from "./types";
import {createTodo} from "./todo.actions";

const initialState: ITodoState = {
  list: [],
  entry: null,
  isLoading: false,
  error: null,
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    // createTodo
    .addCase(createTodo.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
      state.isLoading = false;
      state.error = null;
    })
    .addCase(createTodo.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    })
    .addDefaultCase(state => state);
})

export default todoReducer;