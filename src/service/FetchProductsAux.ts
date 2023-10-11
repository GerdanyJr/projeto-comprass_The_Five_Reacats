import axios from 'axios';
import {Product, Category, ProductByTitle} from '../types/Product';

export async function fetchItensByCategory(id:string){
  const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
  const data:Product[] = response.data;
  return data;
}

export async function fetchCategories() {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
  const data:Category[] = response.data;
  const categories:Category[] = []
  data.forEach(item => {
    if(item.name !== "text"){
      categories.push(item)
    }
  });

  return categories;
}

export async function fetchItensByTitle(title:string) {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${title}`);
  const data:ProductByTitle[] = response.data;
  return data;
}