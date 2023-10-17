import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContinueButton from '../../src/components/Success/ContinueButton';

test('renders ContinueButton correctly', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<ContinueButton onPress={onPressMock}>Continue</ContinueButton>);

  const button = getByText('Continue');
  expect(button).toBeTruthy();
});

test('calls onPress when ContinueButton is pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<ContinueButton onPress={onPressMock}>Continue</ContinueButton>);

  const button = getByText('Continue');
  fireEvent.press(button);

  expect(onPressMock).toHaveBeenCalledTimes(1);
});