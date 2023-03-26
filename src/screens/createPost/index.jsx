import { Input, Button } from '@rneui/themed';
import { React, useState } from 'react';
// eslint-disable-next-line import/namespace
import { View, Text, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { styles } from './styles';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/index';
import { createQuestion } from '../../store/actions/question.action';

const CreatePost = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Question created successfully',
    });
  };
  const create = () => {
    dispatch(createQuestion(id, text));
    setText('');
    showToast();
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header title="Create post" showBack onBackPress={onBackPress} />
      <Toast style={{ zIndex: 1 }} />

      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="writting any question.."
          placeholderTextColor="grey"
          numberOfLines={10}
          onChangeText={(text) => setText(text)}
          value={text}
          multiline
        />
        <Button
          disabled={text === ''}
          buttonStyle={{ marginHorizontal: 10 }}
          color="secondary"
          onPress={() => create()}>
          Create Post
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
