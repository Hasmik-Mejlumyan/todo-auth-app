import * as yup from 'yup';

export const todoScheme = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

export type TodoDataType = yup.InferType<typeof todoScheme>;