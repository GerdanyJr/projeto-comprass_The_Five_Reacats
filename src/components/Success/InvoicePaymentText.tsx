import React, { useState, useEffect } from 'react';
import { Text, TextStyle } from 'react-native';


interface InvoicePaymentProps {
  style?: TextStyle;
  daysOffset: number;
}

const InvoicePaymentText: React.FC<InvoicePaymentProps> = ({ style, daysOffset }) => {
  const [dynamicDate, setDynamicDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysOffset);

    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDynamicDate(formattedDate);
  }, [daysOffset]);

  return <Text style={style}>
    Pay the invoice by {dynamicDate} and then{'\n'}
    follow the steps sent by email.
    </Text>;
};

export default InvoicePaymentText;