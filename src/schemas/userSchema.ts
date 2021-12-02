import * as yup from 'yup';

export const userSchema = yup.object({
  first_name: yup.string().max(32).required().default(''),
  last_name: yup.string().max(32).required().default(''),
  phone: yup.string().required().default(''),
  email: yup.string().required().email().default(''),
  discord: yup.string().default(''),
  instagram: yup.string().default(''),
  password: yup.string().required().default('').min(8),
  confirmPassword: yup.string().required().default('').min(8),
});

export type TUserSchema = yup.InferType<typeof userSchema>;
