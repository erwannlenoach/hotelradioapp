import React, {Component, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

const Cover = () => {

   function fetchCover() {
    fetch('https://radio2.pro-fhi.net/radio/9111/rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss);
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });
    }

fetchCover()

  return (
    <View>
      <Text>Cover</Text>
    </View>
  );
};

export default Cover;
