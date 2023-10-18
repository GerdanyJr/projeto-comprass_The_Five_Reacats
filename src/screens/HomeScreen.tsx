import '../lib/i18n';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { HeaderBar } from '../components/Home/HeaderBar';
import { Section } from '../components/Home/Sections';
import { fetchCategories } from '../service/FetchProductsAux';
import { Category } from '../types/interfaces/Product';
import { UserContext } from '../store/UserContext';

export function HomeScreen() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCategories() {
      const dados = await fetchCategories();
      setCategories(dados);
    }
    getCategories();
  }, []);

  async function loadApi() {
    if (loading) return;

    setLoading(true);
    const dados = await fetchCategories();
    setCategories(dados);
    setLoading(false)
  }

  function LoadingLayer(){
    if(!loading) return;
    return (
      <View>
        <ActivityIndicator size={100} color="red" />
      </View>
    )
  }
  const userCtx = useContext(UserContext);

  function listHeader() {
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
      >
        <Image
          source={require('../assets/images/app-logo.png')}
          style={styles.logoApp}
        />
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>{t("homeScreen.paragraph")}</Text>
          <Image
            source={require('../assets/images/cart-icon.png')}
            style={styles.cartIcon}
          />
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeader}
        data={categories}
        renderItem={({ item }) => <Section id={item.id} title={item.name} />}
        ListFooterComponent={LoadingLayer}
      />
      <HeaderBar
        isAuthenticated={userCtx.isAuthenticated}
        userImg={userCtx.user?.avatar}
        username={userCtx.user?.name}
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
