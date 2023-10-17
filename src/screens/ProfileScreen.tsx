import React, { useContext } from 'react';
import { LoggedProfile } from '../components/Profile/LoggedProfile';
import { UserContext } from '../store/UserContext';
import { UnloggedProfile } from '../components/Profile/UnloggedProfile';

export function ProfileScreen() {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? <LoggedProfile /> : <UnloggedProfile />;
}