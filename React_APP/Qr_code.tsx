import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// See the README file


import SvgQRCode from 'react-native-qrcode-svg';
import QRCode from 'react-native-qrcode-svg';
function Simple() {
  return <SvgQRCode value="http://example.com" />;
}


export default function Qr() {
  return (
    <React.Fragment>
    <View style={styles.container}>
    <Text>qr code </Text>
    <QRCode 

      value="410"
    />
      </View>
      </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
