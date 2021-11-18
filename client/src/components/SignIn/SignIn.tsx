import React, { useEffect, useState } from 'react';
import { useCreateSessionMutation } from '../../services/api';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signIn, { isLoading, data, error }] = useCreateSessionMutation();
  const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn({ email, password });
  };
  useEffect(() => {
    console.log(isLoading, data, error);
  }, [data, error, isLoading]);
  return (
    <form onSubmit={signInHandler}>
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
      <input type="submit" value="sign in"></input>
    </form>
  );
};

export default SignIn;
