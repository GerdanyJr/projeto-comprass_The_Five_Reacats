import { ImageBackground, Image, View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HeaderBar } from './HeaderBar';

export function HomeHeader() {
  const { t } = useTranslation();
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.backgroundImage}
    >
      <HeaderBar />
      <Image
        source={require('../../assets/images/app-logo.png')}
        style={styles.logoApp}
      />
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>{t('homeScreen.paragraph')}</Text>
        <Image
          source={require('../../assets/images/cart-icon.png')}
          style={styles.cartIcon}
        />
      </View>
    </ImageBackground>
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