import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Fix from './components/fix';
import Wrap from './components/wrap';
import Profile from './components/Profile';
import PostList from './components/FlatList';

const App = () => {
  const posts = [
    { content: 'Tugassssss.', timestamp: '2h ago' },
    { content: 'Pertemuan 3!', timestamp: '1d ago' },
    { content: 'Praktikum DPM...', timestamp: '3d ago' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Fix>
        <Profile />
        <Wrap>
          <PostList posts={posts} />
        </Wrap>
      </Fix>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;
