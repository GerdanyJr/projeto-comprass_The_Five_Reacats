import {View, Pressable, GestureResponderEvent, StyleSheet} from "react-native";

export function SwitchCustom({value, onPress}: {value:boolean, onPress: (event: GestureResponderEvent) => void,}){

  return (
    <Pressable style={!value ? styles.button : [styles.button, styles.butonActivated]} onPress={onPress}>
      <View style={!value ? styles.circle : [styles.circle, styles.circleMoved]}></View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 49,
    height: 27,
    justifyContent: "center",
    paddingHorizontal: 2,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12
  },

  butonActivated: {
    backgroundColor: "red"
  },

  circle:{
    width: 19,
    height: 19,
    borderRadius: 50,
    backgroundColor: "#D9D9D9"
  },

  circleMoved: {
    transform: [{translateX: 24}]
  },


})