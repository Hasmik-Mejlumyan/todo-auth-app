export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData extends ISignInData {
  fullName: string;
  confirmPassword: string;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  photoUrl: string | null;
}