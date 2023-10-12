import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { CardSearchResult } from './CardSearchResult';
import { fetchItensByTitle } from '../../service/FetchProductsAux';
import { ProductByTitle } from '../../types/interface/Product';

export function HeaderBar({
  isAuthenticated,
  username,
}: {
  isAuthenticated: boolean;
  username: string;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fetchSearch, setFetchSearch] = useState<ProductByTitle[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getItensByTitle() {
      const dados = await fetchItensByTitle(search);
      setFetchSearch(dados);
    }
    getItensByTitle();
  }, [search]);

  function navigation() {
    console.log();
  }

  return (
    <View style={styles.container}>
      <View
        style={isAuthenticated ? styles.userContain : styles.anonymous}
        testID="userBar"
      >
        <Image
          source={require('../../assets/images/user-example.png')}
          style={styles.userImage}
        />
        <Text style={styles.username}>Hello, {username}</Text>
      </View>

      <View>
        <Pressable
        style={({ pressed }) =>
        pressed
          ? [styles.searchButton, styles.pressed]
          : styles.searchButton}

          onPress={() => setModalVisible(!modalVisible)}
          accessibilityHint="searchButton"
        >
          <Image
            source={require('../../assets/images/search-icon.png')}
            style={styles.searchIcon}
          />
        </Pressable>

        <Modal
          testID="search-modal"
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <TextInput
            placeholder="Enter the product name"
            style={styles.inputSearch}
            placeholderTextColor={'#9B9B9B'}
            onChangeText={setSearch}
          />

          <FlatList
            accessibilityHint="listSearch"
            style={
              search !== '' ? styles.containResultsSearch : styles.emptySearch
            }
            data={fetchSearch}
            renderItem={({ item }) => (
              <CardSearchResult
                url={item.images[0]}
                name={item.title}
                description={item.description}
                price={item.price}
                onPress={navigation}
              />
            )}
            maxToRenderPerBatch={3}
            ListEmptyComponent={() => (
              <Text style={styles.emptyList}>Product not found</Text>
            )}
          />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 333,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 16,
    left: 10,
    position: 'absolute',
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
    borderColor: '#000',
    borderWidth: 1,
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

  anonymous: {
    opacity: 0,
  },

  emptySearch: {
    display: 'none',
  },

  emptyList: {
    width: 315,
    height: 201,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  searchButton: {
    width: 41,
    height: 41,
    backgroundColor: '#FF0024',
    borderRadius: 50,
  },

  pressed: {
    opacity: 0.75
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
    alignSelf: 'center',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    borderWidth: 4,
    borderColor: '#FF0024',
    borderRadius: 16,
    marginTop: 66,
    padding: 12,
  },

  containResultsSearch: {
    maxWidth: 315,
    maxHeight: 201,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#B6B6B6',
    borderWidth: 2,
    marginTop: 8,
  },
});
