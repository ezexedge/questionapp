import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity } from 'react-native';

import { THEME } from '../constants/theme';
import { ProductDetail, Products, CreatePost, Posts, SinglePost } from '../screens/index';

const Stack = createNativeStackNavigator();

const PostsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{
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
      <Stack.Screen name="Posts" component={Posts} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />

      <Stack.Screen
        name="SinglePost"
        component={SinglePost}
        options={({ route }) => ({
          title: 'prueba',
        })}
      />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
