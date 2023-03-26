import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import SettingsNavigator from './settings';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Bitter-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Archives',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'save' : 'save-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
