import { useFocusEffect } from '@react-navigation/native';
import { Button, LinearProgress } from '@rneui/base';
import React, { useCallback } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import Header from '../../components/header/index';
import { THEME } from '../../constants/theme';
import { selectCategory } from '../../store/actions';
import { getQuestion } from '../../store/actions/question.action';
console.log('sssssssssaaaaaaaa');
const Posts = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const questionListSelector = useSelector((state) => state.questionList);
  const { loading, error, questionList } = questionListSelector;

  useFocusEffect(
    useCallback(() => {
      dispatch(getQuestion());
    }, [dispatch])
  );

  const onSelected = (item) => {
    console.log('SSSs', item);
    navigation.navigate('SinglePost', {
      id: item.id,
    });
  };

  const onRedirect = () => {
    navigation.navigate('CreatePost');
  };
  const renderItem = ({ item }) => (
    <CategoryItem isArchive={false} item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Inicio" redirect onRedirect={onRedirect} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={questionList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.containerList}
          contentContainerStyle={styles.contentContainerList}
        />
      )}
    </SafeAreaView>
  );
};

export default Posts;
