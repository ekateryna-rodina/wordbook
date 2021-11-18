import React, { useEffect, useState } from 'react';
import { useCreateUserMutation } from '../../services/api';

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [signUp, { isLoading, data, error }] = useCreateUserMutation();
  const signUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ name, email, password, passwordConfirmation });
  };
  useEffect(() => {
    console.log(isLoading, data, error);
  }, [data, error, isLoading]);
  return (
    <form onSubmit={signUpHandler}>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="name"></label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="email"></label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="passwordConfirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <label htmlFor="passwordConfirmation"></label>
      <input type="submit" value="sign up"></input>
    </form>
  );
};

export default SignUp;
