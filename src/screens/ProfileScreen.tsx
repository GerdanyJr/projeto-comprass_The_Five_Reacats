import React, { useContext } from 'react';
import { LoggedProfile } from '../components/Profile/LoggedProfile';
import { UserContext } from '../store/UserContext';
import { UnloggedProfile } from '../components/Profile/UnloggedProfile';

export function ProfileScreen() {
  const { logout, user } = useContext(UserContext);
  return user ? (
    <LoggedProfile logout={logout} user={user} />
  ) : (
    <UnloggedProfile />
  );
}