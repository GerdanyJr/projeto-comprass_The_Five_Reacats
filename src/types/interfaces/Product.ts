export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
      id: string;
      name: string;
      image: string;
      creationAt: string;
      updatedAt: string;
  };
}

export interface Category {
    id: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
};

export interface ProductByTitle {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
      id: string;
      name: string;
      image: string;
      creationAt: string;
      updatedAt: string;
  };
}