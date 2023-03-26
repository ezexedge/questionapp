import { Text, Card, Button, Icon, Avatar, Badge, withBadge, Dialog } from '@rneui/themed';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
const BadgedIcon = withBadge(15)(Icon);

const CategoryItem = ({ deleteItem, item, onSelected, isArchive }) => {
  const [visible1, setVisible1] = useState(false);

  console.log('sssss777', item);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Card>
          <Card.Title style={styles.title}>{item.question}</Card.Title>
          <Card.Divider />
          <View style={styles.textContainer}>
            <Text style={{ color: '#397af8', paddingVertical: 5 }}>
              {!item?.comments ? 0 : item?.comments?.length} comments
            </Text>
            <Text style={{ color: 'rgb(173, 20, 87)', paddingVertical: 5 }}>Category:</Text>
          </View>
          {isArchive && (
            <Button
              color="error"
              icon={<Icon name="save" color="#ffffff" iconStyle={{ marginRight: 0 }} />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginVertical: 5,
              }}
              title="Delete archive"
              onPress={toggleDialog1}
            />
          )}
        </Card>
      </TouchableOpacity>
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Are you sure to delete the archive?" />
        <Button
          buttonStyle={{
            marginVertical: 10,
          }}
          onPress={() => deleteItem(item?.idFirebase)}>
          Yes
        </Button>
        <Button
          buttonStyle={{
            marginVertical: 10,
          }}
          color="error"
          onPress={() => setVisible1(!visible1)}>
          No
        </Button>
      </Dialog>
    </View>
  );
};

export default CategoryItem;
