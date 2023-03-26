import { Text, Badge, Button, Icon, Card, Image } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { getDate } from '../../utils';

const Comments = ({ item }) => {
  console.log('commment', item);
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/680px-Default_pfp.svg.png?20220226140232',
            }}
          />
          <Text style={styles.name}>
            {item.firstName} {item.lastName}
          </Text>
        </View>
        <View>
          <Text>{getDate(item.date)}</Text>
        </View>
      </View>
      <View>
        <Text style={{ marginVertical: 10 }} p>
          {item.comment}
        </Text>
      </View>
      <Card.Divider />
    </View>
  );
};

export default Comments;
