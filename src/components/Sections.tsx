import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardItem } from './CardItem';
import { CardItemExemple } from './CardItemExemple';
import { fetchItensByCategory } from '../service/FetchProductsAux';
import { Product } from '../types/Product';

export function Section({ id, title }: { id: string; title: string }) {
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
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Pressable style={styles.buttonViewAll}>
          <Text style={styles.buttonViewAllText}>View all</Text>
        </Pressable>
      </View>
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
        ListEmptyComponent={CardItemExemple}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    backgroundColor: '#fff',
  },

  categoryHeader: {
    width: 343,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  categoryTitle: {
    color: '#000',
    marginLeft: 16,
    fontSize: 32,
    fontWeight: '800',
  },

  buttonViewAll: {
    justifyContent: 'center',
  },

  buttonViewAllText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 12,
  },
});
