import React from "react";
import { Text, View , StyleSheet, TouchableOpacity, Alert} from "react-native";

export default class extends React.Component {
  render() {
    return (
        <React.Fragment>
            <View style={styles.button}></View>
            <TouchableOpacity
            style={{backgroundColor: "red",marginTop: 200,}}
            onPress={() => Alert.alert("simple button pressed")}>
            <Text style={{textAlign: "center"}}>S'identifier</Text>
            </TouchableOpacity>
            <Text>S'identifier</Text>
        <View style={styles.circle}></View>
        </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
circle:{
backgroundColor: "black",
width: "100%",
height:"80%",
borderBottomLeftRadius: 180,
borderBottomRightRadius: 180,
zIndex: 0
},
button:{
    zIndex: 2
}

});