import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../assets/constants/Colors';

export const mainPageOptions = {
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: Colors.red_500,
    tabBarLabelStyle: { fontSize: 14 },
  },
  homeOptions: {
    tabBarIcon: ({ color, size, focused }: any) => (
      <Ionicons
        name={focused ? 'home' : 'home-outline'}
        color={color}
        size={size}
      />
    ),
  },
  cartOptions: {
    tabBarIcon: ({ color, size, focused }: any) => (
      <Ionicons
        name={focused ? 'cart' : 'cart-outline'}
        color={color}
        size={size}
      />
    ),
  },

  cartOptionsActivated:{
    tabBarIcon: ({ color, size, focused }: any) => (
      <Ionicons
        name={focused ? 'cart' : 'cart-outline'}
        color={color}
        size={size}
      />
    ),
    tabBarBadge: "on",
    tabBarBadgeStyle: {
      maxWidth: 6,
      maxHeight: 8,
    },
  },

  profileOptions: {
    tabBarIcon: ({ color, size, focused }: any) => (
      <Ionicons
        name={focused ? 'person' : 'person-outline'}
        color={color}
        size={size}
      />
    ),
  },
};
