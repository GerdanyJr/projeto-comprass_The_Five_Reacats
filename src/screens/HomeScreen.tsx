import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { HeaderBar } from '../components/HeaderBar';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <ScrollView>
          <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.backgroundImage}
          >
            <Image
              source={require('../assets/images/app-logo.png')}
              style={styles.logoApp}
            />
            <View style={styles.paragraphContainer}>
              <Text>Aqui você sempre ganha!</Text>
              <Image
                source={require('../assets/images/cart-icon.png')}
                style={styles.cartIcon}
              />
            </View>
          </ImageBackground>
          <View style={styles.categories}>

          </View>
      </ScrollView>
      <HeaderBar isAuthenticated={true} username="Juliane Golçalves Freitas" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    height: 374,
    alignItems:"center",
    justifyContent: "space-between"
  },


  logoApp: {
    marginTop: 160,
    width: 263,
    height: 56,
  },

  paragraphContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },

  paragraph: {
    
  },

  cartIcon: {
    width: 46,
    height: 46,
  },

  categories:{
    backgroundColor: "#fff",
  }
});
