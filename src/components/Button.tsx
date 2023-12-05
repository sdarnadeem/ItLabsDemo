import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.containerStyle}}
      onPress={props.onPress}>
      <Text style={{...styles.buttonText, ...props.textStyle}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: '#1898A0',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // This is the color equivalent to var(--text-text-primary-invert, #FFF)
    textAlign: 'center',
    fontFamily: 'Abel',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27.2,
  },
});
