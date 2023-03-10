import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { THEME } from '../../constants/theme';
import { selectCategory } from '../../store/actions';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      title: item.title,
    });
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
