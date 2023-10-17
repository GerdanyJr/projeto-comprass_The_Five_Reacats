import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ContinueShoppingButton from '../../src/components/Success/ContinueShoppingButton';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('ContinueShoppingButton', () => {
  it('must call the navigation function when pressed', () => {

    const testNavigation = { navigate: jest.fn() };

    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue(testNavigation);

    const { getByAccessibilityHint } = render(
      <NavigationContainer>
        <ContinueShoppingButton accessibilityHint="ContinueShoppingbutton" />
      </NavigationContainer>
    );

    const continueButton = getByAccessibilityHint('ContinueShoppingbutton');
    fireEvent.press(continueButton);

    expect(testNavigation.navigate).toHaveBeenCalledWith('MainPage');
  });
});
