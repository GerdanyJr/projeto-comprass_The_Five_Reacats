export function formatCep(cep: string) {
  if (cep.length > 5 && !cep.includes('-')) {
    return cep.slice(0, 5) + '-' + cep.slice(5);
  } else return cep;
}

export function formatCurrency(amount: number) {
  const formattedAmount = amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });
  return formattedAmount;
}

export function formatCardNumber(number: string) {
  const cardNumber = number.replace(/\D/g, '');
  const groups = [4, 4, 4, 4];
  let formattedCardNumber = '';
  let currentIndex = 0;

  for (const groupSize of groups) {
    const group = cardNumber.slice(currentIndex, currentIndex + groupSize);
    if (group.length > 0) {
      formattedCardNumber += group + ' ';
    }
    currentIndex += groupSize;
  }

  if (formattedCardNumber.endsWith(' ')) {
    formattedCardNumber = formattedCardNumber.slice(0, -1);
  }
  return formattedCardNumber;
}

export function formatExpireDate(date: string) {
  const expireDate = date.replace(/\D/g, '');
  if (expireDate.length > 2) {
    return expireDate.slice(0, 2) + '/' + expireDate.slice(2);
  } else {
    return expireDate;
  }
}
export function hideCardNumber(cardNumber: string) {
  const groups = cardNumber.split(' ');
  const hiddenGroups = groups.map((group, index) =>
    index < 3 ? '****' : group
  );
  const formattedCard = hiddenGroups.join(' ');
  return formattedCard;
}