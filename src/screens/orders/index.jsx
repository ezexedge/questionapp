import { useFocusEffect } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import {
  deleteArchive,
  getQuestionArchiveByUser,
  getQuestionByUser,
} from './../../store/actions/question.action';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import OrderItem from '../../components/order-item';
import { getOrders, deleteOrder } from '../../store/actions/index';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);
  const questionArchive = useSelector((state) => state.question);
  const [update, setUpdate] = useState(false);

  const id = useSelector((state) => state.auth.id);
  console.log('sss666ccccccc', !questionArchive?.questionArchive);
  useFocusEffect(
    useCallback(() => {
      dispatch(getQuestionArchiveByUser(id));
    }, [dispatch])
  );
  const onSelected = (item) => {
    navigation.navigate('ArchiveSingle', {
      id: item.idPost,
      from: 'archived',
    });
  };

  const deleteItem = (id) => {
    dispatch(deleteArchive(id));
    setUpdate(true);
  };

  useEffect(() => {
    dispatch(getQuestionArchiveByUser(id));
    setUpdate(false);
  }, [update]);
  const renderItem = ({ item }) => (
    <CategoryItem deleteItem={deleteItem} isArchive item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView>
      <Header title="Saved questions" />
      {questionArchive?.questionArchive?.length === 0 ? (
        <Text h1>No tiene archivos</Text>
      ) : (
        <FlatList
          data={questionArchive?.questionArchive}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.containerList}
          contentContainerStyle={styles.contentContainerList}
        />
      )}
    </SafeAreaView>
  );
};

export default Orders;
