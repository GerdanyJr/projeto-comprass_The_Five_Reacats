import axios from 'axios';
import { User } from '../types/interfaces/User';
import { Token } from '../types/interfaces/Token';

export async function login(email: string, password: string) {
  const response = await axios.post(
    'https://api.escuelajs.co/api/v1/auth/login',
    {
      email: email,
      password: password,
    }
  );
  const data = await response.data;
  const token: Token = {
    acessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
  return token;
}

export async function getUser(token: string) {
  const response = await axios.get(
    'https://api.escuelajs.co/api/v1/auth/profile',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: User = await response.data;
  const user: User = { ...data, shippingAdresses: [], paymentForms: [] };
  return user;
}

export async function signUp(name: string, email: string, password: string) {
  const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
    name: name,
    email: email,
    password: password,
    avatar: 'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg',
  });
  const data: User = await response.data;
  return data;
}