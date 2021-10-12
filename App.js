import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Dimensions } from "react-native";
import Player from './src/player/index'
import Cover from './src/cover/index'

library.add(fab);

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperdiv}>
        <Image
          style={styles.logo}
          source={require("./assets/img/logo_hotel_radio.gif")}
        />
      </View>
      <View style={styles.centerdiv}>
        <Cover></Cover>
        <Player></Player>
    
      </View>
      <SafeAreaView style={styles.lowerdiv}>
        <FontAwesomeIcon icon={["fab", "instagram"]} style={styles.icons} />
        <FontAwesomeIcon icon={["fab", "tiktok"]} style={styles.icons} />
        <FontAwesomeIcon icon={["fab", "mixcloud"]} style={styles.icons} />
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icons} />
      </SafeAreaView>
    </SafeAreaView>
  );
}

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#F4A599",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  upperdiv: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  centerdiv: {
    margin: 100,
    flex: 9,
    height: 600,
    width: 300,
  },
  lowerdiv: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#99E8F4",
    padding: 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
  },
  logo: {
    height: 150,
    width: 300,
  },
  icons: {
    color: "white",
    fontSize: 200,
    fontWeight: "300",
  },
});
