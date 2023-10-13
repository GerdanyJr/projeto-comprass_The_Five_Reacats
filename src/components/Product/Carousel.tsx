import { useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

import { Product } from '../../types/interfaces/Product';
import { fetchItemById } from '../../service/FetchProductsAux';

export function Carousel({ id }: { id: string }) {
  const [data, setData] = useState<Product>();

  useEffect(() => {
    async function getItemById() {
      const dados = await fetchItemById('72');
      setData(dados);
    }
    getItemById();
  }, []);

  return (
    <FlatList
      data={data?.images}
      renderItem={({item})=>(
        <Image source={{uri: item}}/>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },

  image: {
    width: 80,
    height: 80,
    marginLeft: 25
  },

  name: {
    color: 'red',
  },
  description: {
    color: 'red',
  },
  price: {
    color: 'red',
  },
});
