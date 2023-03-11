import { Text } from '@rneui/themed';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import EmojiModal from 'react-native-emoji-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { styles } from './styles';
import { ProductItem } from '../../components';
import { selectProduct, filterProducts } from '../../store/actions';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header title="Question" showBack onBackPress={onBackPress} />
      <View style={styles.container}>
        <Text h3>Hello World</Text>
        <EmojiModal
          onEmojiSelected={(emoji) => {
            true;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
