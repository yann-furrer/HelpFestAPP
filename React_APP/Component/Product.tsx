import React, { Component, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  PixelRatio,
  Button,
  TextInput,
} from "react-native";

class Product extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          object_of_product: {},
          quantity: 0
        };
       
      }  

  fetch_product = async() => {

    try {
      let response = await fetch(
        'http://172.104.156.69:8000/api/product'
        );
        let json = await response.json();
        let array_of_product = json
        this.setState({ object_of_product: array_of_product });
        console.log(this.object_of_product);
      
        
      } catch (error) {
        console.error(error);
      }
  };

  back () {
    this.props.navigation.navigate('Home') 
  }
  
  count_less = () => {
    if (this.state.quantity <= 0) {
    } else {
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
    // var ingredient = [];
    // var ok = 4

    // for(let i = 0; i < ok; i++){

    //   ingredient.push(

    //     <View style={{ flexDirection: 'column-reverse',
    //     justifyContent: 'space-around'}} key = {i} >
    //     <Text style={styles.loop_square}>ok</Text>
    //     </View>

    //   )
    // }
    const { quantity } = this.state;
    return (
      <React.Fragment>
        <View style={{ flexDirection: "column" }}>
            <TouchableOpacity style={styles.goback}
             onPress={() => this.back()}>
                <View>
                <AntDesign name="arrowleft" size={30} color="white" style={{zIndex: 1, paddingLeft:20, marginTop: 29}}/>
                    <Text></Text>
                </View>
            </TouchableOpacity>
    
          <Text
            style={{
              color: "white",
              zIndex: 1,
              
              fontSize: 30,
              marginLeft: 20,
            }}
          >
            Hot Dog épicé
          </Text>
          <Text
            style={{
              color: "#E9B44C",
              zIndex: 1,
              fontSize: 30,
              marginLeft: 20,
            }}
          >
            4,99 €
          </Text>
        </View>
        <View style={styles.circle}></View>
        <View style={styles.button_fond}>
          <TouchableOpacity
            style={styles.less}
            onPress={() => {
              this.count_less();
            }}
          >
            <Text style={{ fontSize: 30, color: "white", alignSelf: "center" }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#E9B44C", fontSize: 27 }}>{quantity}</Text>
          <TouchableOpacity
            style={styles.more}
            onPress={() => {
              this.count_more();
            }}
          >
            <Text style={{ fontSize: 30, color: "white", alignSelf: "center" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.description}>
          <Text style={{ fontSize: 24, marginBottom: 12, marginLeft: 20 }}>
            Description
          </Text>
          <Text style={{ fontSize: 18, marginLeft: 20, marginRight: 20 }}>
            Un hot-dog épicé accompagné de sa garniture chaude et goûtue pour
            régaler vos pauses goûter.
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert("simple button pressed")}
            style={{
              width: "85%",
              height: 41,
              backgroundColor: "black",
              borderRadius: 16,
              marginLeft: 23,
              marginTop: 140
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
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    marginTop: -320,
    alignSelf: "center",
    backgroundColor: "black",
    width: 500,
    height: 500,
    borderRadius: 500,
    zIndex: 0,
  },
  button_fond: {
    backgroundColor: "black",
    zIndex: 0,
    height: 47,
    width: 145,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: -20,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    borderColor: "#F1F1F1",
    borderBottomWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  less: {
    backgroundColor: "black",
    zIndex: 1,
    height: 46,
    width: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  more: {
    backgroundColor: "black",
    zIndex: 1,
    height: 46,
    width: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  description: {},
  ingredient: {},
  loop_square: {
    backgroundColor: "black",
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  goback:{
      zIndex: 1
  }
});

export default Product;
