import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardItem } from './CardItem';
import { fetchItensByCategory } from '../service/FetchItensByCategory';
import { Product } from '../types/Product';

export function Section({ id, title }: { id: string, title:string }) {
  const [produtos, setProdutos] = useState<Product[]>([]);
  useEffect(() => {
    async function getItensByCategory() {
      const dados = await fetchItensByCategory(id);
      setProdutos(dados);
    }
    getItensByCategory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <CardItem
            name={item.title}
            description={item.description}
            price={item.price}
            url={item.images[0]}
          />
        )}
        horizontal={true}
        maxToRenderPerBatch={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    backgroundColor: '#fff',
  },

  categoryTitle: {
    color: '#000',
    marginLeft: 16,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 16,
  },
});
