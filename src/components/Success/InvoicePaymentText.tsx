import React, { useState, useEffect } from 'react';
import { Text, TextStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

interface InvoicePaymentProps {
  style?: TextStyle;
  daysOffset: number;
}

const InvoicePaymentText: React.FC<InvoicePaymentProps> = ({ style, daysOffset }) => {
  
  const [dynamicDate, setDynamicDate] = useState('');

  const { t } = useTranslation();

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

  return( <Text style={style}>
      {t('successScreen.invoiceText', {date: dynamicDate})}
    </Text>
    );
};

export default InvoicePaymentText;