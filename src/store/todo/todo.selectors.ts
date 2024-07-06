import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../configureStore";

const todoState = (state: RootState) => state.todo;

export const selectList = createSelector(
  todoState,
  (state) => state.list
);

export const selectIsLoading = createSelector(
  todoState,
  (state) => state.isLoading
)
