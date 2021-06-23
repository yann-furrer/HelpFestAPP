import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Component/Home";
import Product from "./Component/Product";
import Register from "./Component/auth/Register";
import Login from "./Component/auth/Login";
import Panier from "./Component/Panier"


const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    IsLongin: true,
    token: "ok",
  };
 
  storeToken = async (tokenValue) => {
    try {
      await AsyncStorage.setItem("token", tokenValue);
      this.setState({ token: tokenValue });
      console.log("app", this.state.token);
    } catch (e) {
      console.log(e);
    }
  };

  HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Notifications" component={Register} />
      </Tab.Navigator>
    );
  }
  refreshPage() {
    window.location.reload(false);
  }
  Login = () => {
    if (this.state.token != null) {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "stepforward" : "verticleright";
              } else if (route.name === "Settings") {
                iconName = focused ? "caretup" : "leftcircle";
              } else if (route.name === "Panier") {
                iconName = focused ? "caretup" : "leftcircle";
                
              }

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Product} />
          <Tab.Screen name="Panier" component={Panier} />
        
        </Tab.Navigator>
      );
    } else {
      return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Register") {
                iconName = focused ? "stepforward" : "verticleright";
              } else if (route.name === "Login") {
                iconName = focused ? "stepforward" : "verticleright";
              } 

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Register" component={Register} />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      );
    }
  };

  render() {
    return <NavigationContainer>{this.Login()}</NavigationContainer>;
  }
}

// <>
//   {service.isConnected() &&

//   }
// </>
