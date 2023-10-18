import '../../lib/i18n';
import { useTranslation } from 'react-i18next';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../assets/constants/Colors';


export function MoreInfoButtons() {
  const[actived1, setActived1] = useState(false)
  const[actived2, setActived2] = useState(false)
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}
      onPress={()=> {setActived1(!actived1)}}
    >
      <View style={styles.headerInfo}>
        <Text style={styles.title}>{t("productScreen.shippingInfo")}</Text>
        <Image source={require("../../assets/images/go-back-dark.png")} style={!actived1 ? styles.arrow : [styles.arrow, styles.arrowActive]}/>
      </View>
      <Text style={!actived1 ? styles.description : styles.descriptionActive}>{t("productScreen.shippingDescription")}</Text>
    </Pressable>

    <Pressable style={styles.button} 
      onPress={()=> {setActived2(!actived2)}}
    >
      <View style={styles.headerInfo}>
        <Text style={styles.title}>{t("productScreen.support")}</Text>
        <Image source={require("../../assets/images/go-back-dark.png")} style={!actived2 ? styles.arrow : [styles.arrow, styles.arrowActive]}/>
      </View>
      <Text style={!actived2 ? styles.description : styles.descriptionActive}>{t("productScreen.suportDetails")}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 16,
    borderColor: Colors.gray_200,
    borderTopWidth: 1
  },

  button: {
    justifyContent: 'space-between',
    padding: 16,
    borderColor: Colors.gray_200,
    borderBottomWidth: 1
  },

  headerInfo:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },

  arrow:{
    width: 21,
    height: 16,
    resizeMode: "center",
    transform:[{rotate: '180deg'}]
  },

  arrowActive:{
    transform:[{rotate: '-90deg'}]
  },

  description: {
    display: "none"
  },

  descriptionActive: {
    fontFamily: 'Open Sans',
    marginTop: 14,
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
  },
});
