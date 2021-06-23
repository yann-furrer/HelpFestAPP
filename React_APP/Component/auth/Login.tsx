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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
          id_log: "",
          password: "",
          tokenlog: this.props.token
        };
        this.send_Data();
      }
    
      updateSearch = (password) => {
        this.setState({ password });
        console.log(paswword);
      };

      send_Data = () => {
            
          fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + this.state.tokenlog,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.state.id_log,
              password: this.state.password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              this.setState({ token: data.token });
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
                });
      };
    

  render() {
    return (
      <React.Fragment>
        <Text>ok{this.state.token}</Text>
        <View style={{ backgroundColor: "green" }}></View>
        <View style={styles.top_view}></View>
        <View style={styles.bottom_view}>
          <Text style={{ fontSize: 28, color: "black", marginLeft: 30 }}>
            Se connecter
          </Text>
          <TextInput
            style={styles.input1}
            onChangeText={this.Login}
            value={this.id_log}
            autoCompleteType="off"
            placeholder="Identifiant tente"
          />

          <TextInput
            style={styles.input2}
            onChangeText={this.updateSearch}
            value={this.password}
            secureTextEntry={true}
            placeholder="mot de passe"
            autoCompleteType="password"
          />

          <Text
            onPress={() => Alert.alert("simple button pressed")}
            style={{ color: "#E4D6A7", marginLeft: 30, marginTop: 10 }}
          >
            s'inscrire
          </Text>

          <TouchableOpacity
            style={styles.valid_button}
            onPress={() => {
              this.send_Data();
            }}
          >
            <Text style={{ textAlign: "center", marginTop: 11 }}>
              Se connecter
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
    marginTop: 10,
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
