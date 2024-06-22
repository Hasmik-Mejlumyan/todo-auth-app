import {IUser} from "../../types"

export interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}

// signIn action
export interface ISignInActionReturnData {
  userData: IUser;
  accessToken: string;
}