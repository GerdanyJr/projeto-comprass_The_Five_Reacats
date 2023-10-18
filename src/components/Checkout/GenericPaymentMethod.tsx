import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function GenericPaymentMethod({
  logoPath,
  name,
  onPress,
}: {
  logoPath: ImageSourcePropType;
  name: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.paymentMethod} onPress={onPress}>
      <View style={styles.titleContainer}>
        <Text style={styles.paymentMethodTitle}>Payment Method</Text>
        <Text style={styles.changeMethods}>Change</Text>
      </View>
      <View style={styles.genericMethodContainer}>
        <View style={styles.imageContainer}>
          <Image source={logoPath} style={styles.logoStyles} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  paymentMethod: {
    marginTop: 20,
    paddingBottom: 48,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentMethodTitle: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  changeMethods: {
    fontFamily: 'Open Sans',
    color: Colors.red_500,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'right',
  },
  genericMethodContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  imageContainer: {
    elevation: 3,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  logoStyles: {
    width: 30,
    height: 30,
  },
  name: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    marginHorizontal: 16,
    fontSize: 18
  },
});
