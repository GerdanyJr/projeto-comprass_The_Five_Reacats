import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import SuccessBackground from '../../src/components/Success/SuccessBackground';
import { Text } from 'react-native';

describe('SuccessBackground', () => {
    it('should render correctly', () => {
      const { getByAccessibilityHint } = render(
        <SuccessBackground>
          <Text />
        </SuccessBackground>
      );
  
      const bagsBackgroundImage = getByAccessibilityHint('success background');
      
  
      expect(bagsBackgroundImage).toBeTruthy();
      
    });
  });
  