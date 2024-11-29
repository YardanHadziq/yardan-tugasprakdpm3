import React from 'react';
import { View, StyleSheet } from 'react-native';

const Fix = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark mode background
  },
});

export default Fix;
