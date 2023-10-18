import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Data } from '../../src/util/constants/dataExample';
import { Carousel } from '../components/Product/Carousel';
import { CounterProduct } from '../components/Product/CounterProduct';
import { MoreInfoButtons } from '../components/Product/MoreInfoButtons';
import { Section } from '../components/Product/Section';
import { Product } from '../types/interfaces/Product';
import { fetchItemById } from '../service/FetchProductsAux';

export function ProductScreen({ route }: { route: any }) {
  const { itemId, categoryId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { t } = useTranslation();
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;

    setLoading(true);
    if(itemId !== 0 ) {
      const dados = await fetchItemById(itemId);
      setData(dados);
    } else {
      setData(Data);
    }
    setLoading(false)
  }

  function LoadingLayer(){
    if(!loading) return;
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={100} color="#000" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        <View style={styles.headerBar}>
          <Pressable
            style={styles.goBackButton}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Image source={require('../assets/images/go-back-dark.png')} />
          </Pressable>
          <Text style={styles.headerText}>{t("productScreen.details")}</Text>
        </View>

        
        <Carousel data={data} />
        <MoreInfoButtons />

        <Section title={t("productScreen.youCanAlsoLike")} id={categoryId} />
      </ScrollView>
      <View style={styles.bottomBar}>
        <CounterProduct data={data} />
      </View>
      <LoadingLayer/>
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
    fontFamily: 'Open Sans',
    textAlign: 'center',
    width: '90%',
    fontWeight: '700',
    fontSize: 18,
    color: '#222222',
  },

  loading: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
