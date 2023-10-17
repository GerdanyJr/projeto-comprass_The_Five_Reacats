import '../../lib/i18n';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardItem } from './CardItem';
import { CardItemExemple } from './CardItemExemple';
import { fetchItensByCategory } from '../../service/FetchProductsAux';
import { Product } from '../../types/interfaces/Product';

export function Section({ id, title }: { id: string; title: string }) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const { t } = useTranslation();


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

  return (
    <View style={styles.container}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <Pressable style={styles.buttonViewAll}>
          <Text style={styles.buttonViewAllText}>{t("homeScreen.viewAll")}</Text>
        </Pressable>
      </View>
      <FlatList
        accessibilityHint="productslist"
        data={products}
        renderItem={({ item }: { item: Product }) => (
          <CardItem
            data={item}
            onPress={() => {
              navigation.navigate('Product', {
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
