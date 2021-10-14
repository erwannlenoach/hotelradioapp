import React, {Component} from 'react';
import { WebView } from 'react-native-webview';


const Cover = () => {

  const jsCode = 
  `
  document.getElementsByClassName('elementor-section')[0].style.display = 'none'; 
   `;

   const displayCover = 
   `
   document.getElementsByClassName('proradio-customplayer')[0].style.display = 'block'; 
    `;
    setTimeout(() => {
      this.webref.injectJavaScript(displayCover);
    }, 3000);

    

  return (
    <WebView
    source={{ uri: 'https://hotelradioparis.com/' }}
   
    injectedJavaScript={jsCode}
    ref={r => (webref = r)}
    onMessage={(event) => {}}
    mediaPlaybackRequiresUserAction={true}
    style={{ marginTop: 20 }}
  />
  );
};

export default Cover;
