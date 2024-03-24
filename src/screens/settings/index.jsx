import { Text, Badge, Button, Icon, Card, Image, Input } from '@rneui/themed';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useEffect, useState } from 'react';
import { FlatList, View, TextInput, ScrollView } from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import {
  archivedCuestion,
  createComments,
  getQuestionSingle,
} from './../../store/actions/question.action';
import { styles } from './styles';
import { ProductItem } from '../../components';
import Comments from '../../components/comments';
import { selectProduct, filterProducts, logout } from '../../store/actions';

const Settings = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  const changeInformation = () => {};

  const logoutAndRedirect = () => {
    dispatch(logout());
    navigation.navigate({ name: 'Auth' });
  };

  return (
    <>
      <SafeAreaView>
        <Header title="Settings" />
        <Toast style={{ zIndex: 1 }} />
        <ScrollView>
          <View style={styles.container}>
            <Text>FirstName</Text>
            <Input placeholder="BASIC INPUT" value={name} onChangeText={(text) => setName(text)} />
            <Text>LastName</Text>
            <Input
              placeholder="BASIC INPUT"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />

            <Button
              disabled={!!(name === '' || lastName === '')}
              color="secondary"
              onPress={() => changeInformation()}>
              Save information
            </Button>

            <View style={{ marginVertical: 40 }}>
              <Button color="error" onPress={() => logoutAndRedirect()}>
                Logout
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Settings;
