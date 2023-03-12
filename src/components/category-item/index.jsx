import { Text, Card, Button, Icon, Avatar, Badge, withBadge } from '@rneui/themed';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
const BadgedIcon = withBadge(15)(Icon);

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Card>
          <Card.Title style={styles.title}>{item.question}</Card.Title>
          <Card.Divider />
          <View style={styles.textContainer}>
            <Text style={{ color: '#397af8', paddingVertical: 5 }}>12 comments</Text>
            <Text style={{ color: 'rgb(173, 20, 87)', paddingVertical: 5 }}>universidad</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
