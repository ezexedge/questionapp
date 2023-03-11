import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { getQuestionByUser } from './../../store/actions/question.action';
import { styles } from './styles';
import OrderItem from '../../components/order-item';
import { getOrders, deleteOrder } from '../../store/actions/index';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);
  const id = useSelector((state) => state.auth.id);

  console.log('deded', id);
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getQuestionByUser(id));
    }, [dispatch])
  );

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView>
      <Header title="Saved questions" />
      <View style={styles.container}>
        <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
