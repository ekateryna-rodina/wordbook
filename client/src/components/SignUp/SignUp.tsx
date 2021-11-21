import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { useCreateUserMutation } from '../../services/api';

export const createUserSchema = object({
  name: string().nonempty({ message: 'Name is required' }),
  password: string()
    .nonempty({ message: 'Password is required' })
    .min(6, 'Pasword must be minimum 6 characters'),
  passwordConfirmation: string().nonempty({
    message: 'Password confirmation is required',
  }),
  email: string()
    .nonempty({
      message: 'Email is required',
    })
    .email('Email has a wrong format'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation'],
});

export type CreateUserSchema = TypeOf<typeof createUserSchema>;
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });
  const [signUp, { isLoading, data, error }] = useCreateUserMutation();

  const signUpHandler = (values: CreateUserSchema) => {
    console.log(values);
    signUp(values);
  };

  return (
    <form onSubmit={handleSubmit(signUpHandler)}>
      <span>{(error as any)?.name}</span>
      <div className="form-item">
        <label htmlFor="name"></label>
        <input {...register('name')} type="text" id="name" />
        <span>{errors.name?.message}</span>
      </div>
      <div className="form-item">
        <label htmlFor="email"></label>
        <input {...register('email')} type="email" id="email" />
        <span>{errors.email?.message}</span>
      </div>
      <div className="form-item">
        <label htmlFor="password"></label>
        <input {...register('password')} type="password" id="password" />
        <span>{errors.password?.message}</span>
      </div>
      <div className="form-item">
        <label htmlFor="passwordConfirmation"></label>
        <input
          {...register('passwordConfirmation')}
          type="password"
          id="passwordConfirmation"
        />
        <span>{errors.passwordConfirmation?.message}</span>
      </div>
      <input type="submit" value="sign up"></input>
    </form>
  );
};

export default SignUp;
