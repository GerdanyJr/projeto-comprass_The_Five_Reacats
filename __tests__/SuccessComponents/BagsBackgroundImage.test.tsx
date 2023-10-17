import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import BagsBackgroundImage from '../../src/components/Success/BagsBackgroundImage';

describe('BagsBackgroundImage', () => {
    it('should render correctly', () => {
      const { getByAccessibilityHint } = render(
        <BagsBackgroundImage>
          
        </BagsBackgroundImage>
      );
  
      const bagsBackgroundImage = getByAccessibilityHint('bags background');
      
  
      expect(bagsBackgroundImage).toBeTruthy();
      
    });
  });
  