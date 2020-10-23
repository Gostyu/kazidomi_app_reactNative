import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import DATA from "./data/dataBlogPost";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <AppHeader></AppHeader>
        <AppBody dataPost={DATA}></AppBody>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
