import '../../lib/i18n';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useCallback } from 'react';
import { CardItem } from './CardItem';
import { Product } from '../../types/interfaces/Product';
import useCart from '../../hooks/useCart';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SectionHeader from './SectionHeader';
import useProducts from '../../hooks/useProducts';

export function Section({ id, title }: { id: string; title: string }) {
  const { cart, addItem, decreaseQuantity } = useCart();
  const { products, isLoading, getProducts } = useProducts(5, id);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePlus = useCallback((id: string) => addItem(id), []);
  const handleMinus = useCallback((id: string) => decreaseQuantity(id), []);
  const onPress = useCallback((item: Product) => {
    navigation.navigate('Product', {
      itemId: item.id,
      categoryId: item.category.id,
    });
  }, []);

  return (
    products.length > 0 && (
      <View style={styles.container}>
        <SectionHeader title={title} />
        <FlatList
          accessibilityHint="productslist"
          data={products}
          renderItem={({ item }) => (
            <CardItem
              item={item}
              quantity={cart[item.id]}
              onPlusPress={handlePlus}
              onMinusPress={handleMinus}
              onPress={onPress}
            />
          )}
          onEndReached={getProducts}
          onEndReachedThreshold={0.8}
          horizontal
          keyExtractor={(item) => String(item.id)}
          ListFooterComponent={() => (
            <View>
              {isLoading && <ActivityIndicator size={25} color="#000" />}
            </View>
          )}
        />
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    backgroundColor: '#fff',
  },
});
