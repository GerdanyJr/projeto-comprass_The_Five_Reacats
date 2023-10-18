import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../assets/constants/Colors';
import { useTranslation } from 'react-i18next';

export function WarningModal({
  visible,
  message,
  onYesPress,
  onNoPress,
}: {
  visible: boolean;
  message: string;
  onYesPress: () => void;
  onNoPress: () => void;
}) {
  const { t } = useTranslation();
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{t("profileScreen.warning")}</Text>
            <Text style={styles.message}>{message}</Text>
            <View style={styles.optionsContainer}>
              <Text style={styles.option} onPress={onYesPress}>
                {t('profileScreen.yes')}
              </Text>
              <Text style={styles.option} onPress={onNoPress}>
                {t('profileScreen.no')}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    paddingHorizontal: 12,
    paddingBottom: 16,
    color: Colors.black,
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 12,
    justifyContent: 'space-evenly',
  },
  option: {
    fontFamily: 'Open Sans',
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
