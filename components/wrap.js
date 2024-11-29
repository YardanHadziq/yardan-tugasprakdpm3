import React from 'react';
import { View, StyleSheet } from 'react-native';

const Wrap = ({ children }) => {
  return <View style={styles.wrap}>{children}</View>;
};

const styles = StyleSheet.create({
  wrap: {
    margin: 15,
    backgroundColor: '#000', // Ensure consistent dark background
  },
});

export default Wrap;
