import { View, Image, StyleSheet, FlatList, Text } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { Product } from '../../types/interfaces/Product';

export function Carousel({data}:{data: Product | undefined}) {

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.images}
        horizontal={true}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        ListEmptyComponent={()=> (
            <Image source={require("../../assets/images/product-details1.png")} style={styles.image}/>
        )}
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.name}>{data?.title}</Text>
          <Text style={styles.category}>{data?.category.name}</Text>
        </View>
        <Text style={styles.price}>{data?.price} R$</Text>
      </View>
      <Text style={styles.description}>{data?.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  },


  image: {
    width: 375,
    height: 413,
  },

  textContainer: {
    marginTop: 64,
    marginBottom: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    maxWidth: 240,
  },

  category: {
    fontFamily: 'Open Sans',
    color: Colors.gray_500,
    fontSize: 11,
    fontWeight: '400',
  },

  description: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontSize: 14,
    fontWeight: '300',
    paddingHorizontal: 16,

  },
  price: {
    fontFamily: 'Open Sans',
    textAlignVertical: "center",
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
  },
});
