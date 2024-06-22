import * as yup from "yup";

export const signInScheme = yup.object({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});

export type SignInFormDataType = yup.InferType<typeof signInScheme>;
