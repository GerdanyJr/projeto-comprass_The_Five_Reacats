import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { logos } from '../../util/logos';

function DeliveryLogo({
  imgPath,
  onPress,
  selected,
}: {
  imgPath: ImageSourcePropType;
  onPress: () => void;
  selected?: boolean;
}) {
  return (
    <View style={{ height: '100%' }}>
      {selected && (
        <Image
          source={require('../../assets/images/check-circle.png')}
          style={{
            width: 22,
            height: 22,
            position: 'absolute',
            zIndex: 1,
            right: -3,
            top: 10,
          }}
        />
      )}
      <Pressable style={styles.deliveryContainer} onPress={onPress}>
        <Image style={styles.logo} source={imgPath} />
        <Text style={styles.shippingTime}>2-3 days</Text>
      </Pressable>
    </View>
  );
}

export function DeliveryMethod({
  selectedItem,
  onLogoPress,
}: {
  selectedItem: number | null;
  onLogoPress: (itemId: number) => void;
}) {
  return (
    <View style={styles.deliveryMethod}>
      <Text style={styles.deliveryMethodTitle}>Delivery Method</Text>
      <FlatList
        data={logos}
        horizontal
        renderItem={({ item }) => (
          <DeliveryLogo
            imgPath={item.logo}
            onPress={() => onLogoPress(item.id)}
            selected={item.id === selectedItem}
          />
        )}
        style={{ height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryMethod: {
    marginTop: 20,
    height: 150,
  },
  deliveryMethodTitle: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 61,
    height: 17,
  },
  deliveryContainer: {
    marginTop: 21,
    width: 100,
    height: 72,
    elevation: 3,
    backgroundColor: Colors.white,
    marginHorizontal: 4,
    paddingHorizontal: 20,
    padding: 17,
    borderRadius: 8,
  },
  shippingTime: {
    color: Colors.gray_500,
    marginTop: 9,
    fontSize: 16,
    textAlign: 'center',
  },
});
