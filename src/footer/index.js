import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

library.add(fab);

const Footer = () => {

  return (
   
      <View style={styles.footerView}>
        <FontAwesomeIcon icon={["fab", "instagram"]} style={styles.icons} size='40' />
        <FontAwesomeIcon icon={["fab", "tiktok"]} style={styles.icons} size='40'/>
        <FontAwesomeIcon icon={["fab", "mixcloud"]} style={styles.icons} size='40' />
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icons} size='40' />
      </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    color: "white",
  },
  footerView: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
    
  
});

export default Footer