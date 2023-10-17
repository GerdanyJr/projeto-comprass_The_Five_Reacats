import React from 'react';
import { render } from '@testing-library/react-native';
import SuccessText from '../../src/components/Success/SuccessText';
import { Colors } from '../../src/assets/constants/Colors';

describe('SuccessText', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = render(
      <SuccessText />
    );

    const textElement = getByText(/Success!/i);
    expect(textElement).toBeTruthy();
  });

  it('deve ter estilos corretos', () => {
    const { getByAccessibilityHint } = render(
      <SuccessText />
    );

    const textElement = getByAccessibilityHint('success text');

    const styles = textElement?.props?.style; 

    expect(styles).toEqual({
      fontSize: 32,
      fontWeight: '700',
      color: Colors.black_800, 
      textAlign: 'center',
      paddingBottom: 12,
    });
  });
});