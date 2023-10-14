import axios from 'axios';

export async function getAddressByCep(cep: string) {
  console.log(cep);
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.data;
  const address= {
    cep: data.cep,
    address: data.logradouro,
    city: data.localidade,
    state: data.uf
  }
  return address;
}