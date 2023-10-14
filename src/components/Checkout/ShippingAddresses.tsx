import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { ShippingAddress } from '../../types/interfaces/ShippingAddress';

interface ShippingAddressesProps {
  selectedAddress: ShippingAddress | undefined;
}

export function ShippingAddresses({ selectedAddress }: ShippingAddressesProps) {
  const navigation = useNavigation<any>();

  function handlePress() {
    navigation.navigate('ShippingAddressForm');
  }
  return (
    <View style={styles.shippingAddress}>
      {selectedAddress ? (
        <Address handlePress={handlePress} address={selectedAddress!} />
      ) : (
        <EmptyAddresses handlePress={handlePress} />
      )}
    </View>
  );
}

function EmptyAddresses({ handlePress }: { handlePress: () => void }) {
  return (
    <>
      <Text style={styles.shippingAddressTitle}>Shipping Address</Text>
      <Pressable onPress={handlePress} style={styles.addShippingContainer}>
        <Text style={styles.changeShipping}>Change</Text>
        <Text style={styles.clickToAddShipping}>Click to add an address</Text>
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
  return (
    <>
      <Text style={styles.shippingAddressTitle}>Shipping Address</Text>
      <Pressable
        onPress={handlePress}
        style={[styles.addShippingContainer, styles.addressContainer]}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{address.fullName}</Text>
          <Text style={styles.address}>{address.address}</Text>
        </View>
        <Text style={styles.changeShipping}>Change</Text>
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
