import { View, Pressable, StyleSheet, Image, Text } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { Colors } from '../../assets/constants/Colors';
import { Product } from '../../types/interfaces/Product';

export function CounterProduct({ data }: { data: Product | undefined }) {
  const userCtx = useContext(UserContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (data !== undefined) {
      const quantity = userCtx.getQuantity(data.id);
      setCount(quantity);
    }
  }, [data]);
  return (
    <View style={styles.countContainer}>
      <Pressable
        onPress={() => {
          count !== 0 ? setCount(count - 1) : setCount(count);
        }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        accessibilityHint="minusButton"
      >
        <Image
          source={require('../../assets/images/minus-icon.png')}
          style={styles.minus}
        />
      </Pressable>
      <Text style={styles.count}>{count}</Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
          if (data !== undefined) {
            userCtx.setItem(data, count + 1);
          }
        }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        accessibilityHint="plusButton"
      >
        <Image
          source={require('../../assets/images/plus-icon.png')}
          style={styles.plus}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  countContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: Colors.red_500,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 28,
  },

  pressed: {
    opacity: 0.75,
  },

  button: {
    width: 104,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },

  minus: {
    width: 24,
    height: 6,
    borderRadius: 13,
  },

  count: {
    height: 43,
    width: 104,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderColor: Colors.gray_500,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 24,
    fontWeight: '600',
  },

  plus: {
    width: 24,
    height: 24,
  },
});
