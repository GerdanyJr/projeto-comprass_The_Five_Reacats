import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainPageOptions } from './MainPageOptions';
import { HomeScreen } from '../../screens/HomeScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import CartScreen from '../../screens/CartScreen';

import useCart from '../../hooks/useCart';

const Tab = createBottomTabNavigator();
export function HomeTabs() {
  const { cart } = useCart();
  return (
    <Tab.Navigator screenOptions={mainPageOptions.screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={mainPageOptions.homeOptions}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={
          Object.entries(cart).length == 0
            ? mainPageOptions.cartOptions
            : mainPageOptions.cartOptionsActivated
        }
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={mainPageOptions.profileOptions}
      />
    </Tab.Navigator>
  );
}
