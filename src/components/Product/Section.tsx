import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Item } from '../Product/Item';
import { fetchItensByCategory } from '../../service/FetchProductsAux';
import { CardItemExemple } from '../Home/CardItemExemple';
import { Product } from '../../types/interfaces/Product';
import { Colors } from '../../assets/constants/Colors';


export function Section({ id, title }: { id: string; title: string }) {
  const [produtos, setProdutos] = useState<Product[]>([]);
  useEffect(() => {
    async function getItensByCategory() {
      const dados = await fetchItensByCategory(id);
      setProdutos(dados);
    }
    getItensByCategory();
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.itemQuantity}>{(produtos.length === 0) ? "1" : produtos.length} items</Text>
      </View>
      <FlatList
        accessibilityHint="productslist"
        data={produtos}
        renderItem={({ item }) => (
          <Item
            name={item.title}
            category={item.category.name}
            price={item.price}
            url={item.images[0]}
            onPress={() => {
              navigation.push('Product', {
                itemId: item.id,
                categoryId: item.category.id,
              });
            }}
          />
        )}
        horizontal={true}
        ListEmptyComponent={() => (
          <CardItemExemple
            onPress={() => {
              navigation.navigate('Product', { itemId: 0, categoryId: 0 });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingBottom: 16,
  },

  categoryHeader: {
    width: 343,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
  },

  categoryTitle: {
    marginLeft: 16,
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
  },

  itemQuantity: {
    color: Colors.gray_500,
    fontSize: 11,
    fontWeight: '500',
  },
});
