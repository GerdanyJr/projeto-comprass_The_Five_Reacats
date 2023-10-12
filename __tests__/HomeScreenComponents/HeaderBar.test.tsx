import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, userEvent, fireEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { HeaderBar } from '../../src/components/Home/HeaderBar';
describe('Card search component test', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('renders HeaderBar component with authenticated', () => {
    const { getByText } = render(
      <HeaderBar isAuthenticated={true} username="TestUser" />
    );

    expect(getByText('Hello, TestUser')).toBeTruthy();
  });

  it('renders HeaderBar component without authenticated', () => {
    const { getByText, getByTestId } = render(
      <HeaderBar isAuthenticated={false} username="" />
    );

    const title = getByTestId('userBar');

    expect(title).toHaveStyle({ opacity: 0 });
  });

  it('pressable button opens modal', async () => {
    const { getByAccessibilityHint, getByTestId } = render(
      <HeaderBar isAuthenticated={false} username="" />
    );

    const searchButton = getByAccessibilityHint('searchButton');
    await user.press(searchButton);

    const modal = getByTestId('search-modal');
    expect(modal).toBeTruthy();
  });

  it('typing in search input updates state', async () => {
    const { getByPlaceholderText, getByAccessibilityHint } = render(
      <HeaderBar isAuthenticated={true} username="TestUser" />
    );
    const searchButton = getByAccessibilityHint('searchButton');
    await user.press(searchButton);

    const searchInput = getByPlaceholderText('Enter the product name');
    fireEvent.changeText(searchInput, 'Test Product');

    const searchList = getByAccessibilityHint('listSearch');

    expect(searchList).toHaveStyle({
      maxWidth: 315,
      maxHeight: 201,
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 12,
      borderColor: '#B6B6B6',
      borderWidth: 2,
      marginTop: 8,
    });
  });
});
