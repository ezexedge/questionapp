import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { ArchiveSingle, Orders } from '../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen
        name="ArchiveSingle"
        component={ArchiveSingle}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
