import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { CardItem } from '../../src/components/CardItem';

describe('Card component test', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('renders CardItem component', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CardItem
        name="name"
        description="Description"
        price=""
        url=""
        onPress={onPressMock}
      />
    );

    expect(getByText('name')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
  });

  it('pressable buttons increment and decrement count', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint, getByText } = render(
      <CardItem
        name="Test Product"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price="20"
        url="https://example.com/image.jpg"
        onPress={onPressMock}
      />
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
      <CardItem
        name="Test Product"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price="20"
        url="https://example.com/image.jpg"
        onPress={onPressMock}
      />
    );

    const minusButton = getByAccessibilityHint('minusButton');
    const countText = getByText('0');

    await user.press(minusButton);
    expect(countText).toHaveTextContent('0');
  });

  it('pressable card triggers action', async () => {
    const onPressMock = jest.fn();
    const { getByAccessibilityHint } = render(
      <CardItem
        name="Test Product"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price="20"
        url="https://example.com/image.jpg"
        onPress={onPressMock}
      />
    );

    const card = getByAccessibilityHint('productRedirection');
    await user.press(card);

    expect(onPressMock).toBeCalled();
  });
});
