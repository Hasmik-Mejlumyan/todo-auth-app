import {IUser} from "../../types"

export interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  verificationEmail: string | null;
  isVerificationEmailSent: boolean;
  isEmailVerified: boolean;
  isLoading: boolean;
  error: string | null;
}

// signIn action
export interface ISignInActionReturnData {
  userData: IUser;
  accessToken: string;
}

// signUp action
export interface ISignUpActionReturnData {
  email: string;
}

// verifyEmail action
export interface IVerifyEmailActionReturnData {
  token: string;
  isEmailVerified: boolean;
}