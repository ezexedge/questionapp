import { Card } from '@rneui/base';
import { Text, Badge, Button, Icon } from '@rneui/themed';
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
import { selectProduct, filterProducts } from '../../store/actions';

const ArchiveSingle = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const category = useSelector((state) => state.category.selected);
  const questionSingle = useSelector((state) => state.question);
  const user = useSelector((state) => state.auth);
  console.log('ssaaaaaa/////////aa', questionSingle?.questionSingle?.userId === user.id);

  console.log('ddddddd---------', route.params.from);
  const onBackPress = () => {
    if (route.params.from === 'archived') {
      navigation.navigate('Orders');
    } else {
      navigation.navigate('Posts');
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Comment created successfully',
    });
  };
  const create = () => {
    dispatch(
      createComments(
        questionSingle?.questionSingle,
        questionSingle?.questionSingle?.idFirebase,
        comment,
        user.firstName,
        user.lastName
      )
    );

    setComment('');
    showToast();
  };

  const saved = () => {
    dispatch(archivedCuestion(questionSingle?.questionSingle, user.id));
  };

  useEffect(() => {
    dispatch(getQuestionSingle(route.params.id, user.id));
  }, [dispatch]);
  const renderItem = ({ item }) => <Comments item={item} />;
  return (
    <SafeAreaView>
      <Header title="Question" showBack onBackPress={onBackPress} />
      <Toast style={{ zIndex: 1 }} />

      <ScrollView>
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
            {questionSingle?.questionSingle?.userId !== user.id ? (
              <>
                <Button
                  radius="sm"
                  type="solid"
                  color="secondary"
                  containerStyle={{
                    width: 100,
                  }}
                  disabled={questionSingle?.questionSingle?.archived}
                  onPress={() => saved()}>
                  Archive
                  <Icon name="save" color="white" />
                </Button>
              </>
            ) : null}
          </View>
          <View style={styles.commentsContainer}>
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
            <Button disabled={comment === ''} color="secondary" onPress={() => create()}>
              Comment
            </Button>
            {!questionSingle?.questionSingle?.comments ? (
              <Text style={styles.commentsText}>dont have any comments</Text>
            ) : (
              <Card
                containerStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}>
                <Card.Title>Comments</Card.Title>
                <Card.Divider />
                <FlatList data={questionSingle?.questionSingle?.comments} renderItem={renderItem} />
              </Card>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArchiveSingle;
