import React from 'react';
import { UserContextProvider } from '../store/UserContext';
import { AppStack } from './AppStack';
import '../lib/i18n';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export function RootStack(): JSX.Element {
  return (
    <UserContextProvider>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </UserContextProvider>
  );
}
