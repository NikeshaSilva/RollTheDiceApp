import React, { useState } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';
import Dice from './Dice';
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const ImageLayout = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let range: number = 6;

    for (let index = 0; index < range; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setBackgroundColor(color);
    console.log(backgroundColor);
  };

  const GenerateRandomNumber = () => {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Dice imageUrl={diceImage} />
        <Pressable
          onPress={() => {
            GenerateRandomNumber();
            generateColor();
          }}
          style={styles.BtnStyles}
        >
          <Text style={styles.btnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnStyles: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    width: '65%',
    height: 'auto',
    borderColor: '#0051b5',
  },
  btnText: {
    color: '#0d7aff',
    marginLeft: 60,
  },
});

export default ImageLayout;
