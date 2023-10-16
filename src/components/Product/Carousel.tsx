import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';

import { Product } from '../../types/interfaces/Product';
import { fetchItemById } from '../../service/FetchProductsAux';
import { Colors } from '../../assets/constants/Colors';

export function Carousel({ id }: { id: string }) {
  const [data, setData] = useState<Product>();

  useEffect(() => {
    if(id !== "0" ){
      async function getItemById() {
        const dados = await fetchItemById(id);
        setData(dados);
      }
      getItemById();
    }
  }, []);

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
          <Text style={styles.name}>{(id === "0") ? "Name" : data?.title}</Text>
          <Text style={styles.category}>{(id === "0" )? "Category" : data?.category.name}</Text>
        </View>
        <Text style={styles.price}>{(id === "0" )? "19.99" : data?.price} R$</Text>
      </View>
      <Text style={styles.description}>{(id === "0" )? "Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim." : data?.description}</Text>
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
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
    maxWidth: 240,
  },

  category: {
    color: Colors.gray_500,
    fontSize: 11,
    fontWeight: '400',
  },

  description: {
    color: '#000',
    fontSize: 14,
    fontWeight: '300',
    paddingHorizontal: 16,

  },
  price: {
    textAlignVertical: "center",
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
  },
});
