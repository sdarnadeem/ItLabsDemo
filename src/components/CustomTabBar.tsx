import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  activeTab: number;
  onTabChange: (tab: number) => void;
};

const CustomTabBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onTabChange(0)}
        style={
          props.activeTab === 0
            ? styles.activeTextContainer
            : styles.textContainer
        }>
        <Text
          style={
            props.activeTab === 0 ? styles.activeText : styles.inactiveText
          }>
          Choose Photo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabChange(1)}
        style={
          props.activeTab === 1
            ? styles.activeTextContainer
            : styles.textContainer
        }>
        <Text
          style={
            props.activeTab === 1 ? styles.activeText : styles.inactiveText
          }>
          Avatars
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
  },

  activeText: {},
  inactiveText: {
    color: 'rgba(2, 6, 23, 0.85)',
    textAlign: 'center',
    fontFamily: 'Abel',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23.8,
  },

  activeTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1898A0',
    paddingVertical: 8,
    borderRadius: 8,
  },

  textContainer: {
    flex: 1,
    paddingVertical: 8,
  },
});
