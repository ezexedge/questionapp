import { Text } from '@rneui/themed';
import React from 'react';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/index';

const ProductDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <Text h2>Hello World</Text>
    </View>
  );
};

export default ProductDetail;
