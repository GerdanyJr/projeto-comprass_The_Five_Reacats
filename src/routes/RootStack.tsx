import React from 'react';
import { UserContextProvider } from '../store/UserContext';
import { AppStack } from './AppStack';
import '../lib/i18n';

export function RootStack(): JSX.Element {
  return (
    <UserContextProvider>
      <AppStack />
    </UserContextProvider>
  );
}
