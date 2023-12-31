import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import { Colors } from '../../assets/constants/Colors';

export function CardSearchResult({
  url,
  name,
  description,
  price,
  onPress,
}: {
  url: string;
  name: string;
  description: string;
  price: string;
  onPress: (event: GestureResponderEvent) => void;
}) {
  return (
    <Pressable
      style={({ pressed }) =>
            pressed
              ? [styles.cardContainer, styles.pressed]
              : styles.cardContainer
          }
      
      onPress={onPress}
      accessibilityHint="productRedirection"
    >
      <Image source={{ uri: url }} style={styles.cardImage} />
      <View style={styles.cardTexts}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDescription} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <Text style={styles.cardPrice}>{price} R$</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 315,
    height: 66,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderColor: Colors.gray_100,
    borderBottomWidth: 2,
  },

  pressed:{
    opacity:0.65,
  },

  cardImage: {
    width: 30,
    height: 37,
    borderRadius: 4,
  },

  cardTexts: {
    width: 150,
    flexDirection: 'column',
    gap: 4,
  },

  cardTitle: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },

  cardDescription: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontSize: 10,
    fontWeight: '400',
  },

  cardPrice: {
    fontFamily: 'Open Sans',
    color: Colors.red_500,
    fontSize: 16,
    fontWeight: '800',
  },
});
