import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Item } from '../Product/Item';
import { fetchItensByCategory } from '../../service/FetchProductsAux';
import { CardItemExemple } from '../Home/CardItemExemple';
import { Product } from '../../types/interfaces/Product';
import { Colors } from '../../assets/constants/Colors';

export function Section({ id, title }: { id: string; title: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;
    if(products.length !== 0){
      setLoading(true);
    }

    const dados = await fetchItensByCategory(id, limit);
    setProducts([...products, ...dados]);
    setLimit((prev) => prev + 5);
    setLoading(false);
  }

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Text style={styles.itemQuantity}>
          {products.length === 0 ? '1' : products.length} items
        </Text>
      </View>
      <FlatList
        accessibilityHint="productslist"
        data={products}
        renderItem={({ item }) => (
          <Item
            data={item}
            onPress={() => {
              navigation.push('Product', {
                itemId: item.id,
                categoryId: item.category.id,
              });
            }}
          />
        )}
        onEndReached={loadApi}
        onEndReachedThreshold={0.8}
        horizontal={true}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={() => (
          <CardItemExemple
            onPress={() => {
              navigation.navigate('Product', { itemId: 0, categoryId: 0 });
            }}
          />
        )}
        ListFooterComponent={() => {
          if (!loading) return;
          return (
            <View>
              <ActivityIndicator size={25} color="#000" />
            </View>
          );
        }}
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
    fontFamily: 'Open Sans',
    marginLeft: 16,
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
  },

  itemQuantity: {
    fontFamily: 'Open Sans',
    color: Colors.gray_500,
    fontSize: 11,
    fontWeight: '500',
  },
});
