import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Settings } from '../screens';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Bitter-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
