import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import PixBackgroundImage from '../../src/components/Success/PixBackgroundImage';

describe('PixBackgroundImage', () => {
    it('should render correctly', () => {
      const { getByAccessibilityHint } = render(
        <PixBackgroundImage>
          
        </PixBackgroundImage>
      );
  
      const bagsBackgroundImage = getByAccessibilityHint('pix background');
      
  
      expect(bagsBackgroundImage).toBeTruthy();
      
    });
  });
  