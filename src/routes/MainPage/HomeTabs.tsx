import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { mainPageOptions } from './MainPageOptions';
import { HomeScreen } from '../../screens/HomeScreen';
import { UserContext } from '../../store/UserContext';
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
        component={View}
        options={(userCtx.cart.length === 0) ? mainPageOptions.cartOptions : mainPageOptions.cartOptionsActivated}
      />
      <Tab.Screen
        name="Profile"
        component={View}
        options={mainPageOptions.profileOptions}
      />
    </Tab.Navigator>
  );
}