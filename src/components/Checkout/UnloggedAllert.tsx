import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { FormButton } from '../UI/FormButton';

export function UnloggedAllert() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You need to connect to complete your purchase, come on?
      </Text>
      <FormButton
        title="Login"
        style={styles.button}
        onPress={() => navigation.navigate('AuthStack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  title: {
    color: Colors.black,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    width: '75%',
  },
  button: {
    width: 136,
    marginTop: 16,
  },
});
