import { useState, useEffect, useCallback } from 'react';
import { Product } from '../types/interfaces/Product';
import { fetchItensByCategory } from '../service/FetchProductsAux';

export default function useProducts(limit: number, categoryId: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offSet, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      if (!isLoading && hasMore) {
        setIsLoading(true);
        const fetchedProducts = await fetchItensByCategory(
          categoryId,
          limit,
          offSet
        );
        if (fetchedProducts.length > 0) {
          setProducts([...fetchedProducts]);
          setOffset((prev) => prev + limit);
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoading, getProducts };
}