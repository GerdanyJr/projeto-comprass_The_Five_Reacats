import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { CardItemExemple } from '../../src/components/Home/CardItemExemple';

describe('Card example component test', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('renders CardItem component', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CardItemExemple onPress={onPressMock} />);

    expect(getByText('name')).toBeTruthy();
    expect(
      getByText('Crafted from the softest, breathable fabric')
    ).toBeTruthy();
  });

  it('pressable buttons increment and decrement count', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint, getByText } = render(
      <CardItemExemple onPress={onPressMock} />
    );

    const minusButton = getByAccessibilityHint('minusButton');
    const plusButton = getByAccessibilityHint('plusButton');
    const countText = getByText('0');

    await user.press(plusButton);
    expect(countText).toHaveTextContent('1');

    await user.press(minusButton);
    expect(countText).toHaveTextContent('0');
  });

  it('decrement count to -1', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint, getByText } = render(
      <CardItemExemple onPress={onPressMock} />
    );

    const minusButton = getByAccessibilityHint('minusButton');
    const countText = getByText('0');

    await user.press(minusButton);
    expect(countText).toHaveTextContent('0');
  });

  it('pressable card triggers action', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint } = render(
      <CardItemExemple onPress={onPressMock} />
    );

    const card = getByAccessibilityHint('productRedirection');
    await user.press(card);

    expect(onPressMock).toBeCalled();
  });
});
