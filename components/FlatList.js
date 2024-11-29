import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PostList = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Text style={styles.postContent}>{item.content}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#333', // Dark divider
    padding: 15,
    backgroundColor: '#000', // Dark background for each post
  },
  postContent: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff', // White text
  },
  timestamp: {
    fontSize: 12,
    color: '#888', // Gray text for timestamps
  },
});

export default PostList;
