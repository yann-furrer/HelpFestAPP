import React, { ReactFragment } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  StatusBar,
  Modal,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class Panier extends React.Component {
  back() {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.inside_circle}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ zIndex: 2 }} onPress={() => this.back()}>
              <View>
                <AntDesign
                  name="arrowleft"
                  size={30}
                  color="white"
                  style={{ paddingLeft: 20, marginTop: 29 }}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                zIndex: 2,
                color: "white",
                marginTop: 23,
                fontSize: 23,
                textAlignVertical: "center",
                marginLeft: 90,
              }}
            >
              Panier
            </Text>
          </View>

          <View style={styles.show_coin}>
            <Text style={{ color: "white", fontSize: 23 }}>Vous avez 12</Text>
            <Image
              style={{ height: 40, width: 40, zIndex: 2 }}
              source={require("../assets/ruby.png")}
            />
          </View>
        </View>
        <Image
          style={{
            marginTop: 54,
            width: 300,
            height: 100,
            zIndex: 1,
            alignSelf: "center",
          }}
          source={require("../assets/treasure.png")}
        />
        <View style={styles.circle}></View>
        <View style={styles.loop_food}>
          <Image
            style={{
              width: 60,
              height: 60,
              marginLeft: 12,
              marginTop: 9,
            }}
            source={require("../assets/qr-code.png")}
          />
          <Text style={{ marginLeft: 13,  }}>Poulet Saté</Text>
          <View style={{ flexDirection: "column", marginLeft: 28 }}>
            <Text style={{fontSize: 18}}>quantité</Text>
            <Text style={{ alignSelf: "center" }}>2</Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 39 }}>
            <Text style={{fontSize: 18}}>Prix</Text>
            <Text style={{ alignSelf: "center" }}>12 €</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text
            style={{
              color: "white",
              marginLeft: 12,
              fontSize: 23,
              alignSelf: "center",
            }}
          >
            Total
          </Text>

          <Text
            style={{
              color: "white",
              marginRight: 30,
              fontSize: 20,
              alignSelf: "center",
            }}
          >
            120 €
          </Text>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    marginTop: -416,
    alignSelf: "center",
    backgroundColor: "black",
    width: 500,
    height: 500,
    borderRadius: 500,
    zIndex: 0,
  },
  loop_food: {
    alignSelf: "center",
    marginTop: 11,
    borderWidth: 1,
    height: 80,
    width: "90%",
    borderRadius: 12,
    flexDirection: "row",
  },
  inside_circle: {},
  show_coin: {
    alignSelf: "center",
    alignItems: "center",
    zIndex: 2,
    flexDirection: "row",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    backgroundColor: "black",
    height: 70,
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 12,
  },
});
