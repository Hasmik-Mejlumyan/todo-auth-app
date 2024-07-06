import {ITodoWithoutDescription} from "../../types";

export interface ITodoState {
  list: ITodoWithoutDescription[];
  entry: ITodoWithoutDescription | null;
  isLoading: boolean;
  error: string | null;
}