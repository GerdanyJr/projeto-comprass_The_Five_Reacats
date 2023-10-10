import { View,  Text,  Image,  StyleSheet,  Pressable,  Modal,  TextInput,} from 'react-native';
import { useState } from 'react';

export function HeaderBar({  isAuthenticated,  username}: { isAuthenticated: boolean,  username: string}) {
  const [modalVisible, setModalVisible] = useState(false);
  let cont = 0
  function modalVisibleHandler(){
    if(cont === 0){
      setModalVisible(true)
      cont++
    } else {
      setModalVisible(false)
      cont--
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.userContain}>
        <Image
          source={require('../assets/images/user-example.png')}
          style={styles.userImage}
        />
        <Text style={styles.username}>Hello, {username}</Text>
      </View>

      <View style={styles.searchContain}>
        <Pressable style={styles.searchButton} onPress={modalVisibleHandler}>
          <Image
            source={require('../assets/images/search-icon.png')}
            style={styles.searchIcon}
          />
        </Pressable>
        <Modal animationType="fade" visible={modalVisible} transparent={true}>
          <TextInput
            placeholder="Enter the product name"
            style={styles.inputSearch}
            placeholderTextColor={'#9B9B9B'}
          
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 95,
    flexDirection: 'row',
    marginTop: 16,
    left: 10,
    position: "absolute"
  },

  userContain: {
    width: 207,
    height: 22,
    flexDirection: 'row',
    paddingLeft: 1,
    paddingTop: 1,
    gap: 4,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: "#000",
    borderWidth: 1
  },

  userImage: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },

  username: {
    color: '#000',
    fontWeight: '400',
    fontSize: 12,
    marginRight: 4,
  },

  searchContain: {},

  searchButton: {
    width: 41,
    height: 41,
    backgroundColor: '#FF0024',
    borderRadius: 50,
  },

  searchIcon: {
    width: 22,
    height: 22,
    marginTop: 7,
    marginLeft: 7,
  },

  searchBar: {
    width: 330,
    height: 55,
    borderWidth: 2,
    borderColor: '#FF0024',
  },

  inputSearch: {
    width: 323,
    height: 38,
    alignSelf: "center",
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    borderWidth: 4,
    borderColor: "#FF0024",
    borderRadius: 16,
    marginTop: 66,
    padding: 12,
  },
});
