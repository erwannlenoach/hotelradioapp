import React, {Component, useState, useEffect} from 'react';
import { WebView, Image, Text } from 'react-native-webview';



  


const Cover = () => {
  const [url, setUrl] = useState('https://hotelradioparis.com/wp-content/uploads/2021/09/241993163_245673940830326_7153954473531330161_n.jpg');

  useEffect(() => {
    console.log(url)
   });

   async function myFetch() {
  
    const cheerio = require('react-native-cheerio');
     
    let response = await fetch('https://hotelradioparis.com/');
    let text = await response.text();
    const $ = cheerio.load(text);
    let images = $.html('[class="proradio-slider__i wp-post-image"]')
    let src = $(images).attr('src')
  // setUrl(src)

  }

  return (
    <WebView
    source={{ uri: 'https://hotelradioparis.com/' }}

    ref={r => (webref = r)}
    onMessage={(event) => {}}
    mediaPlaybackRequiresUserAction={true}
    style={{ marginTop: 20 }}
  />
  );
};

export default Cover;