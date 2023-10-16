import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { ShippingAddress } from '../../types/interfaces/ShippingAddress';
import { CheckoutContext } from '../../store/CheckoutContext';
import { useTranslation } from 'react-i18next';

export function ShippingAddresses() {
  const { shippingAddress } = useContext(CheckoutContext);
  const navigation = useNavigation<any>();

  function handlePress() {
    navigation.navigate('ShippingAddressForm');
  }
  return (
    <View style={styles.shippingAddress}>
      {shippingAddress ? (
        <Address handlePress={handlePress} address={shippingAddress} />
      ) : (
        <EmptyAddresses handlePress={handlePress} />
      )}
    </View>
  );
}

function EmptyAddresses({ handlePress }: { handlePress: () => void }) {
  const { t } = useTranslation();
  return (
    <>
      <Text style={styles.shippingAddressTitle}>{t('shippingAddresses.shippingAddress')}</Text>
      <Pressable onPress={handlePress} style={styles.addShippingContainer}>
        <Text style={styles.changeShipping}>{t('shippingAddresses.change')}</Text>
        <Text style={styles.clickToAddShipping}>{t('shippingAddresses.clickToAdd')}</Text>
      </Pressable>
    </>
  );
}

function Address({
  address,
  handlePress,
}: {
  address: ShippingAddress;
  handlePress: () => void;
}) {
  const { t } = useTranslation();
  return (
    <>
      <Text style={styles.shippingAddressTitle}>Shipping Address</Text>
      <Pressable
        onPress={handlePress}
        style={[styles.addShippingContainer, styles.addressContainer]}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {address.fullName}
          </Text>
          <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
            {address.address}
          </Text>
          <Text
            style={styles.address}
            numberOfLines={1}
            ellipsizeMode="tail"
          >{`${address.city}, ${address.state} ${address.cep}`}</Text>
        </View>
        <Text style={styles.changeShipping}>{t('shippingAddresses.change')}</Text>
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  shippingAddress: {
    marginTop: 20,
  },
  shippingAddressTitle: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addShippingContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    elevation: 3,
    marginTop: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  changeShipping: {
    color: Colors.red_500,
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'right',
  },
  clickToAddShipping: {
    color: Colors.gray_500,
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 15,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    maxWidth: '80%',
  },
  name: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 20,
  },
  address: {
    paddingTop: 6,
    color: Colors.black,
    fontSize: 16,
  },
});
