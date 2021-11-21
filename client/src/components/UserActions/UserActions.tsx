import React from 'react';
import {
  useClearSessionMutation,
  useGetCurrentUserQuery,
} from '../../services/api';

const UserActions = () => {
  const { data: user } = useGetCurrentUserQuery();
  const [signOut] = useClearSessionMutation();
  const signOutHandler = () => {
    signOut();
  };

  return (
    <>
      <button onClick={signOutHandler}>Sign Out</button>
      <p>{user?.name}</p>
      <div>Welcome {user?.name}</div>
    </>
  );
};

export default UserActions;
