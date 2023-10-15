import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { GoBackButton } from '../../components/UI/GoBackButton';
import { ParamListBase } from '@react-navigation/native';

export const checkoutStackOptions = {
  navigatorOptions: ({
    navigation,
  }: {
    navigation: NativeStackNavigationProp<ParamListBase>;
  }) =>
    ({
      headerLeft: () => (
        <GoBackButton
          black
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerShadowVisible: false,
      headerTitleAlign: 'center',
      headerTitleStyle: { fontSize: 22, fontWeight: '700' },
    } as NativeStackNavigationOptions),
  shippingAddress: {
    title: 'Adding Shipping Address',
    presentation: 'modal',
    animation: 'slide_from_bottom',
  } as NativeStackNavigationOptions,
  cardForm: {
    title: 'Add new Card',
    headerShown: false,
    presentation: 'transparentModal',
    animation: 'slide_from_bottom',
    contentStyle: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      opacity: 0.99,
      justifyContent: 'flex-end',
    },
  } as NativeStackNavigationOptions,
};