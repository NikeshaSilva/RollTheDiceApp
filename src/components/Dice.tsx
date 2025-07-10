import React, { JSX, PropsWithChildren } from 'react';
import {
  ImageSourcePropType,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

type DiceProps = PropsWithChildren<{
  imageUrl?: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  diceImage: {},
});

export default Dice;
