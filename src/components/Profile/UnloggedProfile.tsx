import React, { useState } from 'react';
import { Dimensions, Pressable } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { FormButton } from '../../components/UI/FormButton';
import { ChangeLanguage } from './ChangeLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export function UnloggedProfile() {
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('profileScreen.myProfile')}</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>{t('profileScreen.unloggedMessage')}</Text>
        <FormButton
          title={t('profileScreen.login')}
          onPress={() => {
            navigation.navigate('AuthStack');
          }}
          style={styles.loginButton}
        />
        <View>
          <Pressable
            style={styles.optionsContainer}
            onPress={() => setIsLanguageModalVisible(true)}
          >
            <Text style={styles.optionName}>{t('profileScreen.language')}</Text>
            <Image source={require('../../assets/images/arrow-bottom.png')} />
          </Pressable>
        </View>
      </View>
      <ChangeLanguage
        visible={isLanguageModalVisible}
        setter={setIsLanguageModalVisible}
      />
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
