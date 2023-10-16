import axios from 'axios';
import { ShippingAddress } from '../types/interfaces/ShippingAddress';

export async function getAddressByCep(
  cep: string
): Promise<{ erro: boolean } | ShippingAddress> {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  let addressResponse = await response.data;
  if (!('erro' in addressResponse)) {
    addressResponse = {
      cep: addressResponse.cep,
      address: addressResponse.logradouro,
      city: addressResponse.localidade,
      state: addressResponse.uf,
    };
  }
  return addressResponse;
}
