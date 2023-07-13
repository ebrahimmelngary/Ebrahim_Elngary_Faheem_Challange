import React, { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './RadioWithLabel.styles';

type RadioWithLabelProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

const RadioWithLabel: FC<RadioWithLabelProps> = ({
  title,
  isActive,
  onPress,
}: RadioWithLabelProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
      <View style={styles.radioButton}>
        <View
          style={
            isActive ? styles.activeRadioButton : styles.inActiveRadioButton
          }
        />
      </View>
    </Pressable>
  );
};

export default RadioWithLabel;
