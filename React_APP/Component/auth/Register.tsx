import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id_log: "",
      password: "",
      password_confirmation: "",
      token: "",
    };
    // this.send_Data();
    this.UpdateToken();
  }
  
  storeToken = async (tokenValue) => {
    try {
      
      await AsyncStorage.setItem('token', tokenValue)
      console.log("je recup de la data", tokenValue)
    } catch (e) {
      console.log(e)
    }
  }
  
 
  UpdateToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
    if(value !== null) {
     this.setState({token: value})
     console.log("getdata", this.state.token)
    }
  } catch(e) {
    // error reading value
  }
}




  Password = (password) => {
    this.setState({ password });
    console.log(password);
  };
  Id = (id_log) => {
    this.setState({ id_log });
    console.log(id_log);
  };
  Password_confimartion = (password_confirmation) => {
    this.setState({ password_confirmation });
    console.log(password_confirmation);
  };
  

  send_Data = () => {
    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.id_log,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.storeToken(data.token);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
      
  };

  render() {
    return (
      <React.Fragment>
        <View style={{ backgroundColor: "green" }}></View>
        <View style={styles.top_view}></View>
        <View style={styles.bottom_view}>
          <Text style={{ fontSize: 28, color: "black", marginLeft: 30 }}>
            Créer un compte
          </Text>
          <TextInput
            style={styles.input1}
            onChangeText={this.Id}
            value={this.state.id_log}
            autoCompleteType="off"
            placeholder="Identifiant tente"
          />

          <TextInput
            style={styles.input2}
            onChangeText={this.Password}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="mot de passe"
            autoCompleteType="password"
          />
          <Text>{this.state.password}</Text>
          <TextInput
            style={styles.input2}
            onChangeText={this.Password_confimartion}
            value={this.state.password_confirmation}
            secureTextEntry={true}
            placeholder="confirmation du mot de passe"
            autoCompleteType="password"
          />
          
          <Text
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
            style={{ color: "#E4D6A7", marginLeft: 30 }}
            >
            se connecter
          </Text>
            <Text>{this.state.token}</Text>

          <TouchableOpacity
            style={styles.valid_button}
            onPress={() => this.send_Data()}  
          >
            <Text style={{ textAlign: "center", marginTop: 11 }}>
              S'inscrire
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  top_view: {
    backgroundColor: "white",
    width: "100%",
    height: "40%",
  },
  bottom_view: {
    backgroundColor: "white",
    width: "100%",
    height: "60%",
  },
  input1: {
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 42,
    width: "85%",
    height: 45,
    borderRadius: 5,
    paddingLeft: 30,
    borderColor: "#E4D6A7",
  },
  input2: {
    alignSelf: "center",
    borderWidth: 1,
    marginTop: 15,
    width: "85%",
    height: 45,
    borderRadius: 5,
    paddingLeft: 30,
    borderColor: "#E4D6A7",
  },
  valid_button: {
    alignSelf: "center",
    marginTop: 30,
    width: "85%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "#E4D6A7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
