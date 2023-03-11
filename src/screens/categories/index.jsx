import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { THEME } from '../../constants/theme';
import { selectCategory } from '../../store/actions';
import { getQuestion } from '../../store/actions/question.action';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const questions = useSelector((state) => state.question.question);

  console.log('acaaa questions', questions);

  useFocusEffect(
    useCallback(() => {
      dispatch(getQuestion());
    }, [dispatch])
  );

  const onSelected = () => {
    navigation.navigate('Products');
  };

  const onRedirect = () => {
    navigation.navigate('CreatePost');
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Inicio" redirect onRedirect={onRedirect} />
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
