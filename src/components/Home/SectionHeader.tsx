import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function SectionHeader({ title }: { title: string }) {
  const { t } = useTranslation();

  return (
    <View style={styles.categoryHeader}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Pressable style={styles.buttonViewAll}>
        <Text style={styles.buttonViewAllText}>{t('homeScreen.viewAll')}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryHeader: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryTitle: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontSize: 32,
    fontWeight: '800',
  },
  buttonViewAll: {
    justifyContent: 'center',
  },
  buttonViewAllText: {
    fontFamily: 'Open Sans',
    color: '#000',
    fontWeight: '400',
    fontSize: 12,
  },
});
