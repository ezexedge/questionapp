import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { ArchiveSingle, Archives } from '../screens';

const Stack = createNativeStackNavigator();

const ArchiveNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Archive"
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
      <Stack.Screen name="Archive" component={Archives} />
      <Stack.Screen
        name="ArchiveSingle"
        component={ArchiveSingle}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ArchiveNavigator;
