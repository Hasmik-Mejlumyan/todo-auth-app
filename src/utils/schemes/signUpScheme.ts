import * as yup from 'yup';

export const signUpScheme = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

export type SignUpFormDataType = yup.InferType<typeof signUpScheme>;

