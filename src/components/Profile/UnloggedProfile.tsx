import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { FormButton } from '../../components/UI/FormButton';
import { ChangeLanguage } from './ChangeLanguage';

export function UnloggedProfile() {
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          You need to login to see your details
        </Text>
        <FormButton
          title="Login"
          onPress={() => {}}
          style={styles.loginButton}
        />
        <View>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionName}>Language</Text>
            <Image source={require('../../assets/images/arrow-bottom.png')} />
          </View>
        </View>
      </View>
      <ChangeLanguage visible={isLanguageModalVisible} setter={setIsLanguageModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    color: Colors.black,
    fontSize: 34,
    fontWeight: 'bold',
    paddingTop: 64,
    marginLeft: 16,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 64,
    gap: 18,
  },
  loginText: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
  },
  loginButton: {
    width: 'auto',
    paddingVertical: 14,
    paddingHorizontal: 42,
  },
  optionsContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    marginTop: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderColor: Colors.gray_200,
  },
  optionName: {
    fontWeight: '700',
    color: Colors.black,
    fontSize: 24,
  },
});
