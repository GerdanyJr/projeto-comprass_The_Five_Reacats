import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Carousel } from '../components/Product/Carousel';

export function ProductScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Pressable style={styles.goBackButton}>
          <Image source={require('../assets/images/go-back-dark.png')} />
        </Pressable>
        <Text style={styles.headerText}>Details</Text>
      </View>

      <Carousel id={"12"}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  headerBar: {
    marginTop: 10,
    marginLeft: 16,
    flexDirection: 'row',
    gap: 127,
  },

  goBackButton: {
    marginTop: 6,
  },

  headerText: {
    fontWeight: '700',
    fontSize: 18,
    color: '#222222',
  },
});
