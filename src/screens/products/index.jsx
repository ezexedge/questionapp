import { Text } from '@rneui/themed';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import Header from './../../components/header/index';
import { getQuestionSingle } from './../../store/actions/question.action';
import { styles } from './styles';
import { ProductItem } from '../../components';
import { selectProduct, filterProducts } from '../../store/actions';

const Products = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const questionSingle = useSelector((state) => state.question.questionSingle);

  console.log('ddddddd');
  const onBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getQuestionSingle(route.params.id));
    console.log('ssaaa', questionSingle);
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Header title="Question" showBack onBackPress={onBackPress} />
      <View style={styles.container}>
        <Text h3>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default Products;
