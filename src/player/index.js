import React, {Component, useEffect, useState} from 'react';
import {Button} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { faPlay,faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Player = () => {
 
const [buttonPlay, setButtonPlay] = useState(true);

  // add state play / pause
  const start = async () => {
    var track = {
      url: 'https://radio2.pro-fhi.net/radio/9111/stream.mp3', // Load media from the network
      title: 'Hotel Radio',
      artist: 'Hotel Radio',
      album: 'Hotel Radio',
      genre: 'Hip-Hop, Electro',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'https://highxtar.com/wp-content/uploads/2017/09/Jean_Hotel_Radio_Paris.jpg', // Load artwork from the network
      duration: 402 // Duration in seconds
    };
    await TrackPlayer.add([track]);

    await TrackPlayer.play();
  };

  const stop = async () => {
  
    await TrackPlayer.stop();
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faPlay} style={styles.playBtn} onPress={start}/>
      <FontAwesomeIcon icon={faPause} style={styles.playBtn} onPress={stop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  playBtn: {
    padding: 20,
  },
});
export default Player;
