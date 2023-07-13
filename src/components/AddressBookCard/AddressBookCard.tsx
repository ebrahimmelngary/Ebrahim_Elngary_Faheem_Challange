import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Result } from '../../types';
import styles from './AddressBookCard.styles';

const AddressBookCard = ({ item }: { item: Result }) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: item?.picture?.thumbnail }}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.picture}
      />
      <View style={styles.details}>
        <Text>{`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}</Text>
        <Text>{item?.email}</Text>
      </View>
    </View>
  );
};

export default AddressBookCard;
