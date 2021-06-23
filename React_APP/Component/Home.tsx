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
import { Entypo } from "@expo/vector-icons";
import SvgQRCode from 'react-native-qrcode-svg';

export default class Home extends React.Component {
  state = {
    search: "",
    modalVisible: false,
  };

  getToken = async () => {
    try {
      let result = await AsyncStorage.getItem("token");
      console.log("je recup de la data", tokenValue);
    } catch (e) {
      console.log(e);
    }
  };

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
  };

  render() {
    const { search } = this.state;
    const { modalVisible } = this.state;
    return (
      <React.Fragment>
        {/* <View>
       <View style={{flexDirection: "row"}}>
        <TextInput
          style={styles.searchbar}
          placeholder="rechercher"
          onChangeText={this.updateSearch}
          value={search}
        />


        <TouchableOpacity
        onPress={() => {this.setState({modalVisible: true})}}
            style={styles.qr_button}
          >
            <Image
            style={{
              width: 29,
              height: 29,
              alignSelf: "center",
              marginTop: 5,
              zIndex: 2
            }}
           source={require('../assets/qr-code.png')}
          />
          </TouchableOpacity>
          </View>

       
          </View>
          <Image
          style={{width: 260, height: 130, zIndex: 2}}
          source={require('../assets/treasure.png')}
          />
        <View style={styles.circle}></View>


        <View style={styles.category}>
          <TouchableOpacity
          onPress={() => {this.setState({modalVisible: false})}}
              style={styles.category_p}
            >
              <Image
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginTop: 9,
              }}
              source={require('../assets/juice.png')}
            />
            <Text style={{color: "black",textAlign: "center", fontSize: 15}}>Déjeuner</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {this.schow_qr();}}
                style={styles.category_p}
              >
                <Image
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: "center",
                  marginTop: 9,
                }}
                source={require('../assets/snack.png')}/>
              <Text style={{color: "black",textAlign: "center", fontSize: 15}}>Plat</Text>
              </TouchableOpacity>
              <TouchableOpacity

              onPress={() => {this.schow_qr();}}
                  style={styles.category_p}
                >
                  <Image
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: "center",
                    marginTop: 9,
                  }}
                  source={require('../assets/alcool.png')}
                />
                <Text style={{color: "black",textAlign: "center", fontSize: 13}}>- 18</Text>
                </TouchableOpacity>
                </View> */}
        <View style={{flexDirection: "row"}}>
          <TextInput
            style={styles.searchbar}
            placeholder="rechercher"
            onChangeText={this.updateSearch}
            value={search}
          />

          <TouchableOpacity
            onPress={() => {
              this.setState({ modalVisible: true });
            }}
            style={styles.qr_button}
          >
            <Image
              style={{
                width: 29,
                height: 29,
                alignSelf: "center",
                alignItems: "center",
                marginTop: 5,
                zIndex: 2,
              }}
              source={require("../assets/g1173.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.show_coin}>
            <Text style={{ color: "white", fontSize: 23 }}>Vous avez 12</Text>
            <Image
              style={{ height: 40, width: 40, zIndex: 2 }}
              source={require("../assets/ruby.png")}
            />
          </View>
        <Image
        style={{  
          width: 300,
          height: 100,
          zIndex: 2,
          alignSelf: "center",
          marginTop: 20,}}
        source={require("../assets/treasure.png")}
        />
        <View style={styles.circle}></View>
        <View style={styles.card}>
          <Image
            style={{
              width: 120,
              height: 120,
              alignSelf: "center",
              marginTop: 7,
              zIndex: 2,
              borderRadius: 12
            }}
            // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            source={require("../assets/poulet-satay-recette-malaisienne-1.jpg")}
          />

          <Modal transparent={true} visible={this.state.modalVisible}>
            <View
              style={{
                backgroundColor: "white",
                width: 250,
                height: 260,
                alignSelf: "center",
                marginTop: 200,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <View style={{ alignSelf: "center", marginTop: 72 }}>
                {/* <QRCode

                value="201"
                /> */}
                <Button
                  title="fermer"
                  onPress={() => {
                    this.setState({ modalVisible: false });
                  }}
                />
                <Text>{modalVisible}</Text>
              </View>
            </View>
          </Modal>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={{ marginLeft: 9, fontSize: 19 }}>titre</Text>
            <Text style={{ marginRight: 9, fontSize: 19 }}>13 €</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  ok: {
    width: 200,
  },
  circle: {
    marginTop: -647,
    alignSelf: "center",
    backgroundColor: "black",
    width: 500,
    height: "100%",
    borderRadius: 500,
    zIndex: 0,
  },
  searchbar: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    height: 43,
    textAlign: "left",
    paddingLeft: 30,
    width: 220,
    zIndex: 2,
    backgroundColor: "white",
    marginTop: 50,
    marginLeft: 20,
  },
  card: {
    backgroundColor: "white",
    height: 200,
    width: 152,
    marginLeft: 20,
    borderRadius: 17,
    marginTop: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  qr_button: {
    backgroundColor: "black",
    zIndex: 2,
    width: 42,
    height: 42,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 10,
  },
  category: {
    flexDirection: "row",
  },
  category_p: {
    zIndex: 2,
    height: 75,
    width: 70,
    borderRadius: 15,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 17,
    borderWidth: 1,
  },
  show_coin: {
    alignSelf: "center",
    alignItems: "center",
    zIndex: 2,
    flexDirection: "row",
  },
});
