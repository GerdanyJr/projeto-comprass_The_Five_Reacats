import React, { useContext, useState } from 'react';
import { Dimensions, Pressable, Switch, TextInput } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { WarningModal } from './WarningModal';
import { ChangeLanguage } from './ChangeLanguage';
import { UserContext } from '../../store/UserContext';
import { useTranslation } from 'react-i18next';

export function LoggedProfile() {
  const { logout, user } = useContext(UserContext);
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangesModalVisible, setIsChangesModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [name, setName] = useState(user?.name);

  function toggleSwitch() {
    setIsEditing((prevState) => !prevState);
  }

  function handleYesLogoutPress() {
    setIsLogoutModalVisible(false);
    logout();
  }
  return (
    user && (
      <View style={styles.container}>
        <Pressable
          style={styles.checkContainer}
          onPress={() => console.log('foda')}
          disabled={!isEditing}
        >
          <Image
            source={require('../../assets/images/check-circle.png')}
            style={!isEditing && styles.hidden}
          />
        </Pressable>
        <Text style={styles.header}>{t('profileScreen.myProfile')}</Text>
        <View style={styles.loginContainer}>
          <Pressable>
            <Image
              source={require('../../assets/images/edit.png')}
              style={[styles.editingPen, !isEditing && styles.hidden]}
            />
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          </Pressable>
          <View style={styles.userInfoContainer}>
            <View>
              {isEditing ? (
                <TextInput
                  value={name}
                  onChangeText={(enteredText) => setName(enteredText)}
                  style={styles.input}
                />
              ) : (
                <Text
                  style={styles.username}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {user.name}
                </Text>
              )}
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.optionName}>
                {t('profileScreen.editInfo')}
              </Text>
              <Switch
                trackColor={{ false: Colors.gray_500, true: Colors.red_500 }}
                onChange={toggleSwitch}
                value={isEditing}
              />
            </View>
            <Pressable
              style={styles.option}
              android_ripple={{ foreground: true, color: Colors.gray_200 }}
              onPress={() => setIsLanguageModalVisible(true)}
            >
              <Text style={styles.optionName}>
                {t('profileScreen.language')}
              </Text>
              <Image source={require('../../assets/images/arrow-bottom.png')} />
            </Pressable>
            <Pressable
              style={styles.option}
              android_ripple={{ foreground: true, color: Colors.gray_200 }}
              onPress={() => setIsLogoutModalVisible(true)}
            >
              <Text style={styles.optionName}>{t('profileScreen.logout')}</Text>
              <Image source={require('../../assets/images/logout.png')} />
            </Pressable>
          </View>
        </View>
        <WarningModal
          visible={isChangesModalVisible}
          message={t('profileScreen.abortChanges')}
          onYesPress={() => {
            setIsChangesModalVisible(false);
          }}
          onNoPress={() => {
            console.log('no');
          }}
        />
        <WarningModal
          visible={isLogoutModalVisible}
          message={t('profileScreen.logoutMessage')}
          onYesPress={handleYesLogoutPress}
          onNoPress={() => {
            setIsLogoutModalVisible(false);
          }}
        />
        <ChangeLanguage
          visible={isLanguageModalVisible}
          setter={setIsLanguageModalVisible}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  checkContainer: {
    alignSelf: 'flex-end',
    height: 46,
    width: 46,
    marginTop: 16,
    marginRight: 16,
  },
  hidden: {
    display: 'none',
  },
  header: {
    color: Colors.black,
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 16,
    gap: 18,
  },
  userInfoContainer: {
    justifyContent: 'center',
  },
  input: {
    color: Colors.black,
    fontSize: 32,
    padding: 0,
    fontWeight: '600',
    borderBottomColor: Colors.gray_500,
    borderBottomWidth: 1,
  },
  username: {
    fontSize: 32,
    color: Colors.black,
    fontWeight: '600',
  },
  email: {
    fontSize: 18,
    color: Colors.gray_200,
  },
  editingPen: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
  },
  avatar: {
    width: 142,
    height: 142,
    borderRadius: 180,
  },
  optionsContainer: {
    width: Dimensions.get('screen').width,
  },
  option: {
    flexDirection: 'row',
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
