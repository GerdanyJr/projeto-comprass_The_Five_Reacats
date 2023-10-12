import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { Section } from '../../src/components/Home/Sections';

describe('Section component test', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('renders Section component', () => {
    const { getByText } = render(<Section id="1" title="Test Category" />);

    expect(getByText('Test Category')).toBeTruthy();
  });

  it('renders List when data is empty', () => {
    const { getByText, getByAccessibilityHint } = render(
      <Section id="1" title="test" />
    );

    const list = getByAccessibilityHint('productslist');
    expect(list).toBeOnTheScreen();
  });
});
