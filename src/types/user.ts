export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData extends ISignInData {
  fullName: string;
  confirmPassword: string;
}