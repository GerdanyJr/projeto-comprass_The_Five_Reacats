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
  return data;
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

export async function checkEmail(email: string) {
  const response = await axios.post('https://api.escuelajs.co/api/v1/users/is-available', {
    "email": email
  });
  const data: {isAvailable: boolean} = await response.data;
  return data;
}

export async function updateUserPassword(id: number, password: string) {
  const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, {
    "password": password
  })

  const data : User = await response.data;
  return data;
}