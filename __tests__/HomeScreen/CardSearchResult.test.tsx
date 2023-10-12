import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { CardSearchResult } from '../../src/components/CardSearchResult';

describe('Card search component test', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  test('renders CardSearchResult component', () => {
    const { getByText } = render(
      <CardSearchResult
        name="Test"
        description="Description"
        price=""
        url=""
        onPress={() => {}}
      />
    );

    expect(getByText('Test')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
  });

  it('pressable card triggers action', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint } = render(
      <CardSearchResult
        name="Test"
        description="Description"
        price=""
        url=""
        onPress={onPressMock}
      />
    );

    const card = getByAccessibilityHint('productRedirection');
    await user.press(card);

    expect(onPressMock).toBeCalled();
  });
});
