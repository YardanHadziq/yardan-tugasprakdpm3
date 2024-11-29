import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Yardan Hadziq',
      handle: '@yardanhadziq',
      bio: 'Angkatan 22 dari Kelas 5F. | React Native LifeCycle',
      followers: 1.282,
      following: 388,
      profilePic: require('../assets/pfp.png'),
      headerImage: require('../assets/header2.png'), // Header URL
    };
  }

  render() {
    const { username, handle, bio, followers, following, profilePic, headerImage } = this.state;

    return (
      <View style={styles.container}>
        {/* Header Image */}
        <Image source={headerImage} style={styles.headerImage} />

        {/* Avatar & Info */}
        <View style={styles.profileContainer}>
          <Image source={profilePic} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.handle}>{handle}</Text>
          <Text style={styles.bio}>{bio}</Text>

          {/* Followers & Following */}
          <View style={styles.statsContainer}>
            <Text style={styles.stats}>
              <Text style={styles.bold}>{following}</Text> Following
            </Text>
            <Text style={styles.stats}>
              <Text style={styles.bold}>{followers}</Text> Followers
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Dark background
    marginBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  profileContainer: {
    paddingHorizontal: 15,
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000', // Match background
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // White text
  },
  handle: {
    fontSize: 16,
    color: '#888', // Gray text for handle
  },
  bio: {
    marginVertical: 10,
    fontSize: 14,
    color: '#aaa', // Light gray text for bio
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stats: {
    marginRight: 15,
    fontSize: 14,
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Profile;
