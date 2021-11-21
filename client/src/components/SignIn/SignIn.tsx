import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, TypeOf } from 'zod';
import { useCreateSessionMutation } from '../../services/api';

export const createSessionSchema = object({
  email: string().nonempty({ message: 'Email is required' }),
  password: string().nonempty({ message: 'Password is required' }),
});

export type CreateSessionSchema = TypeOf<typeof createSessionSchema>;
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateSessionSchema>({
    resolver: zodResolver(createSessionSchema),
  });
  const [signIn, { isLoading, data, error }] = useCreateSessionMutation();

  const signInHandler = (values: CreateSessionSchema) => {
    signIn(values);
  };
  useEffect(() => {
    console.log(isLoading, data, error);
  }, [data, error, isLoading]);
  return (
    <form onSubmit={handleSubmit(signInHandler)}>
      <span>{(error as any)?.message}</span>
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
      <input type="submit" value="sign in"></input>
    </form>
  );
};

export default SignIn;
