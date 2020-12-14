import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Output from './components/Input';
import Input from './components/Output';
import { Store } from "./State/Store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={Store} >
            <Output />
            <Input />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
