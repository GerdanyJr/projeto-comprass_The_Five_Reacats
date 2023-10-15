import creditCardType from 'credit-card-type';
import { cardBrands as Cards } from './constants/CardBrands';

export function getCardBrand(cardNumber: string) {
  const cardInfo = creditCardType(cardNumber);

  if (cardNumber.length > 0) {
    const cardBrand = cardInfo[0].niceType;
    const foundBrand = Cards.find((brand) => brand.name == cardBrand);
    return foundBrand;
  }
  return undefined;
}