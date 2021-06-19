import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

class Cat extends React.Component {
  state = {
    quantity: 0,
  };

  count_less = () => {
    if(this.state.quantity <= 0){

      
    }
    else{
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  count_more = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  render() {
    const { quantity } = this.state;
    return (
      <React.Fragment>
        <View>
          <View style={styles.square_notif}></View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://rasamalaysia.com/wp-content/uploads/images/thumbs/thai_chicken_sate_thumb-480x480.jpg",
            }}
          />
        </View>
        <View style={styles.title_price}>
          <Text style={styles.title}>Poulet Saté</Text>
          <Text style={styles.price}>13€</Text>
        </View>
        <Text style={styles.description}>
          Le poulet sauce saté (ou satay) est un plat typiquement indonésien.
          C’est un plat rapide et parfumé à souhait. La poudre de saté est une
          poudre sucrée-salée à base de cacahuètes et d’épices plus ou moins
          relevés.
        </Text>

        <View style={styles.button_quantity}>
          <TouchableOpacity
            onPress={() => {
              this.count_less();
            }}
            style={styles.button_more}
          >
            <Text style={{ color: "white", fontSize: 21 }}>-</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 21,
              alignSelf: "center",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.count_more();
            }}
            style={styles.button_less}
          >
            <Text style={{ color: "white", fontSize: 21 }}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => Alert.alert("simple button pressed")}
          style={{
            width: "85%",
            height: 41,
            backgroundColor: "black",
            borderRadius: 16,
            marginLeft: 23,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
              alignSelf: "center",
              paddingTop: 7,
            }}
          >
            AJOUTER AU PANIER
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    alignSelf: "stretch",
    height: 382,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
    borderWidth: 4,
  },
  square_notif: {
    alignSelf: "center",

    height: 28,
    backgroundColor: "#F1F1F1",
  },
  title_price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 5,
    marginLeft: 23,
    fontSize: 25,
  },
  price: {
    marginTop: 5,
    marginRight: 30,
    fontSize: 25,
  },
  description: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 23,
    marginRight: 23,
  },
  buy: {
    backgroundColor: "black",
  },
  button_quantity: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  button_less: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 100,
    backgroundColor: "black",
  },
  button_more: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 100,
    backgroundColor: "black",
  },
});

export default Cat;
