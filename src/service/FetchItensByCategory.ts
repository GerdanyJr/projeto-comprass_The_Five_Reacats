import axios from 'axios';
import {Product, Category} from '../types/Product';

export async function fetchItensByCategory(id:string){
  const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
  const data = response.data;
  return data;
}

export async function fetchCategories() {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
  const data:Category[] = response.data;
  return data;
}
