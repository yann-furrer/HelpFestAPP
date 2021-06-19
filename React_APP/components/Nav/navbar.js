import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cat from '../../Product';
import Cate from '../../ProductN';
import Home from '../../Home';
import Qr from '../../Qr_code';
import Register from '../auth/Register'
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ok" component={Cate} />
       <Tab.Screen name="Acceuil" component={Home} />
      <Tab.Screen name="Horoscope" component={Cat} />
      <Tab.Screen name="Qr" component={Qr} />
      <Tab.Screen name="Register" component={Register} />

    </Tab.Navigator>
  );
}
export default MyTabs
