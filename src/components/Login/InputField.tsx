import React, { useRef, useState } from 'react';

import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Animated,
  Easing,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface InputFieldProps {
  label: string;
  error: boolean;
  value: string;
  enabledInput: boolean;
  icon?: ImageSourcePropType;
  secureTextEntry?: boolean;
  onChangeText?: (enteredText: string) => void;
  onIconPress?: () => void;
}

export function InputField(props: InputFieldProps): JSX.Element {
  const [labelStyles, setLabelStyles] = useState(styles.label);
  const [errorLabelStyles, setErrorLabelStyles] = useState(styles.errorLabel);
  const transY = useRef(new Animated.Value(0));

  const handleFocus = () => {
    setLabelStyles(styles.focusedLabel);
    setErrorLabelStyles(styles.errorFocusedLabel);
    animateTransform(-15);
  };

  const handleBlur = () => {
    if (props.value.length === 0) {
      animateTransform(0);
      setLabelStyles(styles.label);
      setErrorLabelStyles(styles.errorLabel);
    }
  };

  const transX = transY.current.interpolate({
    inputRange: [-40, -15],
    outputRange: [-20, 0],
    extrapolate: 'clamp',
  });

  const animateTransform = (toValue: number) => {
    Animated.timing(transY.current, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  return (
    <>
      <View style={[styles.inputContainer, !props.enabledInput && styles.disabledInput, props.error && styles.errorInput]}>
        <View>
          <Animated.Text
            style={[
              labelStyles,
              {
                transform: [
                  { translateY: transY.current },
                  { translateX: transX },
                ],
              },
              props.error && errorLabelStyles,
            ]}
          >
            {props.label}
          </Animated.Text>
          <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            editable={props.enabledInput}
          />
        </View>
        {props.icon && props.enabledInput && (
          <Pressable onPress={props.onIconPress}>
            <Image source={props.icon} />
          </Pressable>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 64,
    paddingTop: 8,
  },
  disabledInput: {
    backgroundColor: Colors.gray_200
  },
  label: {
    position: 'absolute',
    color: Colors.gray_500,
    fontSize: 18,
  },
  focusedLabel: {
    position: 'absolute',
    color: Colors.gray_500,
    fontSize: 16,
  },
  errorLabel: {
    color: Colors.red_500,
    fontSize: 18,
  },
  errorFocusedLabel: {
    color: Colors.red_500,
    fontSize: 16,
  },
  input: {
    color: Colors.black,
    minWidth: '90%',
    maxWidth: '90%',
    padding: 0,
    fontSize: 16,
  },
  errorInput: {
    borderColor: Colors.red_500,
    borderWidth: 1,
    borderRadius: 12,
  },
});