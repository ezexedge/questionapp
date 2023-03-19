import { Text, Badge, Button, Icon } from '@rneui/themed';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useEffect, useState } from 'react';
import { FlatList, View, TextInput } from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { createComments, getQuestionSingle } from './../../store/actions/question.action';
import { styles } from './styles';
import { ProductItem } from '../../components';
import { selectProduct, filterProducts } from '../../store/actions';

const Products = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const category = useSelector((state) => state.category.selected);
  const questionSingle = useSelector((state) => state.question);
  console.log('ssaaa', questionSingle);

  console.log('ddddddd');
  const onBackPress = () => {
    navigation.goBack();
  };
  const create = () => {
    dispatch(
      createComments(
        questionSingle?.questionSingle,
        questionSingle?.questionSingle?.idFirebase,
        comment
      )
    );
  };

  useEffect(() => {
    dispatch(getQuestionSingle(route.params.id));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Header title="Question" showBack onBackPress={onBackPress} />
      <View style={styles.container}>
        <Text style={styles.title} h3>
          {questionSingle?.questionSingle?.question}
        </Text>
        <View style={styles.information}>
          <Badge
            value={`Author: ${questionSingle?.questionSingle?.firstName}  ${questionSingle?.questionSingle?.lastName}`}
            status="secondary"
          />
          <Badge
            value={`Category: ${questionSingle?.questionSingle?.firstName}  ${questionSingle?.questionSingle?.lastName}`}
            status="secondary"
          />
        </View>
        <View>
          <Button
            radius="sm"
            type="solid"
            color="secondary"
            containerStyle={{
              width: 100,
            }}>
            Archive
            <Icon name="save" color="white" />
          </Button>
        </View>
        <View style={styles.commentsContainer}>
          {!questionSingle?.questionSingle?.comments && (
            <Text style={styles.commentsText}>dont have any comments</Text>
          )}
        </View>

        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="writting any question.."
          placeholderTextColor="grey"
          onChangeText={(text) => setComment(text)}
          value={comment}
          numberOfLines={10}
          multiline
        />
        <Button color="secondary" onPress={() => create()}>
          Comment
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Products;
