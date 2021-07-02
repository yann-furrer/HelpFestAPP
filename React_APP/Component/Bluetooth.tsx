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
interface Props {
  UnLogged: () => void
}

class Bluetooth extends React.Component {
    constructor(props : Props) {
        super(props);
      
        this.state = {
          object_of_product: {},
          quantity: 0, 
          token: "ok"
        };
        this.UnLogged = props.UnLogged.bind(this) 
      };  
      

   render(){
  

      
    
       return (
         <React.Fragment>
             <Text>bluetooth component</Text>
            <Button
            title="disconnect"
            onPress={() => this.UnLogged(this.state.token = null)}
            />
         </React.Fragment>
       );
   }
  }

const styles = StyleSheet.create({
loop_square:{
    color: "black",
    fontSize: 13,
   
}
});

export default Bluetooth;
