import { Icon, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';

import { styles } from './styles';

const Header = ({
  title,
  onBackPress,
  onRedirect,
  redirect,
  showSearch,
  onSearch,
  keyword,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput((s) => !s);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Icon name="chevron-back" type="ionicon" color="orange" />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image style={styles.icon} source={require('../../../assets/search.png')} />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}

        <Text style={styles.title}>{title}</Text>

        {redirect ? (
          <Pressable onPress={onRedirect}>
            <Icon name="add" type="ionicon" color="orange" />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
    </View>
  );
};

export default Header;
