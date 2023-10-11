import axios from 'axios';

export async function login(email: string, password: string) {
  const response = await axios.post(
    'https://api.escuelajs.co/api/v1/auth/login',
    {
      email: email,
      password: password,
    }
  );
  const data = await response.data;
  return data;
}
