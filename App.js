import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Dimensions } from "react-native";
import Cover from './src/cover/index'
import Player from './src/player/index'
import Footer from './src/footer/index'

library.add(fab);

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.upperdiv}>
        <Image
          style={styles.logo}
          source={require("./assets/img/logo_hotel_radio.gif")}
        />
      </View>
      <View style={styles.centerdiv}>
        <Cover/>
        <Player/>
      </View>
      <View style={styles.lowerdiv}>
      <Footer></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
   backgroundColor: "#F4A599",
    alignItems: "center",
    justifyContent: "center",
  },
  upperdiv: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  centerdiv: {
     justifyContent:'center', 
    margin: 100,
    flex: 3,
    width: 300,
  },
  lowerdiv: {
  flexDirection: "row",
    flex: 1,
    backgroundColor: "#99E8F4",
    paddingBottom: 20,
    marginBottom: 0
  
  },
  logo: {
    height: 150,
    width: 300,
  },
});