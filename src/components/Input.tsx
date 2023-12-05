import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';

type Props = {
  label: string;
  placeholder: string;
  inputProps?: TextInputProps;
};

const Input = (props: Props) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.star}>*</Text>
      </View>
      <TextInput
        style={styles.inputField}
        placeholder={props.placeholder}
        placeholderTextColor="rgba(2, 6, 23, 0.60)"
        {...props.inputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  labelContainer: {
    flexDirection: 'row',
    columnGap: 1,
  },
  label: {
    paddingBottom: 3,
    color: 'rgba(2, 6, 23, 0.70)',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23.8,
  },
  star: {
    color: 'red',
  },

  inputField: {
    backgroundColor: '#F8FAFC',
    borderRadius: 6,
    borderWidth: 0.3,
    height: 40,
    color: 'rgba(2, 6, 23, 0.85)',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 1.7,
    paddingHorizontal: 10,
  },
});

export default Input;
