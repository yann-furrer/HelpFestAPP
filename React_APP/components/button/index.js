
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cat from "../../Product";
import Cate from "../../ProductN"


const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Cat} />
      <Stack.Screen name="Details" component={Cate} />
    </Stack.Navigator>
  );
}