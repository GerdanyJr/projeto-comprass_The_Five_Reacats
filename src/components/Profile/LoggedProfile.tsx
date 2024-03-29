import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Pressable, TextInput } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../../assets/constants/Colors';
import { WarningModal } from './WarningModal';
import { ChangeLanguage } from './ChangeLanguage';
import { useTranslation } from 'react-i18next';
import { User } from '../../types/interfaces/User';
import { UserContext } from '../../store/UserContext';
import { SwitchCustom } from './SwitchCustom';

export function LoggedProfile({
  logout,
  user,
}: {
  logout: () => void;
  user: User;
}) {
  const userCtx = useContext(UserContext);
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangesModalVisible, setIsChangesModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [changes, setChanges] = useState<any>();
  const [name, setName] = useState(user?.name);
  const [avatar, setAvatar] = useState<any>(user?.avatar);

  useEffect(() => {
    setChanges({ name: name });
  }, [name]);

  function toggleSwitch() {
    if (changes !== undefined && isEditing) {
      setIsChangesModalVisible(true);
    } else {
      setIsEditing((prevState) => !prevState);
    }
  }

  async function handleImageChangePress() {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 256,
      maxWidth: 256,
    });
    if (response && response.assets && response.assets[0]) {
      const uri = response.assets[0].uri;
      setAvatar(uri);
      setChanges((prevState: any) => {
        return { ...prevState, avatar: uri };
      });
    }
  }

  function handleSubmitPress() {
    setIsEditing((prevState) => !prevState);
    userCtx.updateUser(changes);
    setChanges(undefined);
  }

  function handleYesChangesPress() {
    setChanges(undefined);
    setIsEditing(false);
    setIsChangesModalVisible(false);
  }
  function handleYesLogoutPress() {
    setIsLogoutModalVisible(false);
    logout();
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.checkContainer}
        onPress={handleSubmitPress}
        disabled={!isEditing}
      >
        <Image
          source={require('../../assets/images/check-circle.png')}
          style={!isEditing && styles.hidden}
        />
      </Pressable>
      <Text style={styles.header}>{t('profileScreen.myProfile')}</Text>
      <View style={styles.loginContainer}>
        <Pressable disabled={!isEditing} onPress={handleImageChangePress}>
          <Image
            source={require('../../assets/images/edit.png')}
            style={[styles.editingPen, !isEditing && styles.hidden]}
          />
          <Image
            source={{ uri: avatar ? avatar : '' }}
            style={styles.avatar}
          />
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
            <Text style={styles.optionName}>{t('profileScreen.editInfo')}</Text>
            <SwitchCustom onPress={toggleSwitch} value={isEditing} />
          </View>
          <Pressable
            style={styles.option}
            android_ripple={{ foreground: true, color: Colors.gray_200 }}
            onPress={() => setIsLanguageModalVisible(true)}
          >
            <Text style={styles.optionName}>{t('profileScreen.language')}</Text>
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
        onYesPress={handleYesChangesPress}
        onNoPress={() => {
          setIsChangesModalVisible(false);
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
    fontFamily: 'Open Sans',
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
    fontFamily: 'Open Sans',
    color: Colors.black,
    fontSize: 32,
    padding: 0,
    fontWeight: '600',
    borderBottomColor: Colors.gray_500,
    borderBottomWidth: 1,
  },
  username: {
    fontFamily: 'Open Sans',
    fontSize: 32,
    color: Colors.black,
    fontWeight: '600',
  },
  email: {
    fontFamily: 'Open Sans',
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
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: Colors.black,
    fontSize: 24,
  },
});
