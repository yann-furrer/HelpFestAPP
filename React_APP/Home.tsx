import { SearchBar } from "react-native-elements";
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
  Button
} from "react-native";
import QRCode from 'react-native-qrcode-svg';


export default class App extends React.Component {
  state = {
    search: "",
    modalVisible: false,
  };

  show_qr() {
     return(
       <View>
       <SvgQRCode value="http://example.com" />
       <Text>jhiu</Text>

       </View>

     );
   }

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
  };

  render() {
    const { search } = this.state;
    const { modalVisible } = this.state;
    return (
      <React.Fragment>

      <View>
       <View style={{flexDirection: "row"}}>
        <TextInput
          style={styles.searchbar}
          placeholder="useless placeholder"
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
            }}
            source={require('./assets/qr-code.png')}
          />
          </TouchableOpacity>
          </View>

          <View style={styles.category}>
          <TouchableOpacity
          onPress={() => {this.setState({modalVisible: false})}}
              style={styles.category_p}
            >
              <Image
              style={{
                width: 60,
                height: 60,
                alignSelf: "center",
                marginTop: 9,
              }}
              source={require('./assets/juice.png')}
            />
            <Text style={{color: "white",textAlign: "center", fontSize: 15}}>Déjeuner</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {this.schow_qr();}}
                style={styles.category_p}
              >
                <Image
                style={{
                  width: 60,
                  height: 60,
                  alignSelf: "center",
                  marginTop: 9,
                }}
                source={require('./assets/snack.png')}
              />
              <Text style={{color: "white",textAlign: "center", fontSize: 15}}>Plat</Text>
              </TouchableOpacity>
              <TouchableOpacity

              onPress={() => {this.schow_qr();}}
                  style={styles.category_p}
                >
                  <Image
                  style={{
                    width: 60,
                    height: 60,
                    alignSelf: "center",
                    marginTop: 9,
                  }}
                  source={require('./assets/alcool.png')}
                />
                <Text style={{color: "white",textAlign: "center", fontSize: 15}}>- 18</Text>
                </TouchableOpacity>
                </View>
          </View>
        <View style={styles.circle}></View>

        <View style={styles.card}>
          <Image
            style={{
              width: 120,
              height: 120,
              alignSelf: "center",
              marginTop: 7,
            }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
                >
                <View style={{backgroundColor: "white", width: 250, height: 260, alignSelf: "center", marginTop:200, borderRadius:20, borderWidth: 1, borderColor: "black"}}>


                <View style={{alignSelf: "center", marginTop: 72}}>
                <QRCode

                value="201"
                />
                <Button title="show modal"   onPress={() => {this.setState({modalVisible: false})}}/>
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
    marginTop: -375,
    alignSelf: "center",
    backgroundColor: "black",
    width: 500,
    height: 500,
    borderRadius: 500,
    zIndex: 0,
  },
  searchbar: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    height: 43,
    textAlign: "center",
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
    borderWidth: 1,
    borderColor: "grey"
  },
  qr_button:{
    backgroundColor: "white",
    zIndex: 2,
    width: 42,
    height: 42,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 10,

  },
  category:{
    flexDirection: "row",

  },
  category_p:{
    zIndex: 2,
    height: 95,
    width: 80,
    borderRadius: 15,
    backgroundColor:"black",
    marginTop: 25,
    marginLeft: 20,
    marginRight:17
  },
});
