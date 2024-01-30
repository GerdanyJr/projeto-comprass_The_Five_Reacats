import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Section } from './Section';
import { fetchCategories } from '../../service/FetchProductsAux';
import { Category } from '../../types/interfaces/Product';
import { HomeHeader } from './HomeHeader';

export default function Sections() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategories() {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    }
    getCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item: category }) => (
          <Section id={category.id} title={category.name} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  backgroundImage: {
    height: 374,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoApp: {
    marginTop: 160,
    width: 263,
    height: 56,
  },
  paragraphContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 12,
    paddingBottom: 16,
    gap: 12,
    alignItems: 'center',
  },
  paragraph: {
    fontFamily: 'Open Sans',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cartIcon: {
    width: 46,
    height: 46,
  },
});
