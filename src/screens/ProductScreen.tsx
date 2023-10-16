import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { Carousel } from '../components/Product/Carousel';
import { CounterProduct } from '../components/Product/CounterProduct';
import { MoreInfoButtons } from '../components/Product/MoreInfoButtons';
import { Section } from '../components/Product/Section';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export function ProductScreen({
  route
}: {
  route: any;
}) {
  var { itemId, categoryId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <View style={styles.headerBar}>
          <Pressable style={styles.goBackButton} onPress={()=>{navigation.navigate("Home")}
        }>
            <Image source={require('../assets/images/go-back-dark.png')} />
          </Pressable>
          <Text style={styles.headerText}>Details</Text>
        </View>

        <Carousel id={JSON.stringify(itemId)} />
        <MoreInfoButtons />

        <Section
          title="You can also like this"
          id={JSON.stringify(categoryId)}
        />
      </ScrollView>
      <View style={styles.bottomBar}>
        <CounterProduct />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  list: {
    height: '85%',
  },

  bottomBar: {
    alignSelf: 'center',
    verticalAlign: 'bottom',
    backgroundColor: '#fff',
    height: '15%',
  },

  headerBar: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
  },

  goBackButton: {
    width: 25,
    marginTop: 6,
  },

  headerText: {
    textAlign: 'center',
    width: '90%',
    fontWeight: '700',
    fontSize: 18,
    color: '#222222',
  },
});
