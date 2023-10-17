import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainPageOptions } from './MainPageOptions';
import { HomeScreen } from '../../screens/HomeScreen';
import { UserContext } from '../../store/UserContext';
import { ProfileScreen } from '../../screens/ProfileScreen';
import CartScreen from '../../screens/CartScreen';

import { useContext } from 'react';

const Tab = createBottomTabNavigator();
export function HomeTabs() {
  const userCtx = useContext(UserContext);
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
          userCtx.cart.length === 0
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
