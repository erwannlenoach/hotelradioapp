import React, {Component, useEffect} from 'react';
import {Button} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import bet from '../../assets/songs/bet.mp3';
import img from '../../assets/img/octavian.png';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const Player = () => {
  const start = async () => {
    var track = {
      url: 'https://radio2.pro-fhi.net/radio/9111/stream.mp3', // Load media from the network
      title: 'Avaritia',
      artist: 'deadmau5',
      album: 'while(1<2)',
      genre: 'Progressive House, Electro House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://highxtar.com/wp-content/uploads/2017/09/Jean_Hotel_Radio_Paris.jpg', // Load artwork from the network
      duration: 402 // Duration in seconds
    };
    await TrackPlayer.add([track]);

    await TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={start} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});
export default Player;
