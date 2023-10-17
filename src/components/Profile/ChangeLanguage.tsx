import '../../lib/i18n';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { NotchHeader } from '../Checkout/NotchHeader';
import { Option } from '../UI/Option';
import { useTranslation } from 'react-i18next';

export function ChangeLanguage({
  visible,
  setter,
}: {
  visible: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t, i18n } = useTranslation();
  function handleEnglishPress() {
    i18n.changeLanguage('en');
    setter(false);
  }
  function handlePortuguesePress() {
    i18n.changeLanguage('pt');
    setter(false);
  }
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <NotchHeader title={'Languages'} />
        <View style={styles.optionsContainer}>
          <Option
            title={t('profileScreen.english')}
            onPress={handleEnglishPress}
            selected={false}
          />
          <Option
            title={t("profileScreen.portuguese")}
            onPress={handlePortuguesePress}
            selected={false}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    backgroundColor: 'white',
  },
  optionsContainer: {
    marginTop: 24,
  },
  optionTitle: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 20,
    paddingLeft: 16,
    paddingVertical: 13,
  },
  selectedOption: {
    color: Colors.white,
    backgroundColor: Colors.red_500,
  },
});
