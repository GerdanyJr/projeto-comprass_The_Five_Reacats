import React from 'react';
import { render } from '@testing-library/react-native';
import InvoicePaymentText from '../../src/components/Success/InvoicePaymentText';

describe('InvoicePaymentText', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <InvoicePaymentText daysOffset={1} />
    );

    const textElement = getByText(/Pay the invoice by/i);
    expect(textElement).toBeTruthy();
  });

  it('should render the correct date', () => {
    const { getByText } = render(
      <InvoicePaymentText daysOffset={1} />
    );

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    const expectedText = `Pay the invoice by ${formattedDate} and then\nfollow the steps sent by email.`;

    const textElement = getByText(expectedText);
    expect(textElement).toBeTruthy();
  });
});