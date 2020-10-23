import { StatusBar } from 'expo-status-bar';
import {React,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Notification from "./components/Notification"
export default function App() {
  useEffect(() => {
    let result = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (result.status === 'granted') {
     console.log('Notification permissions granted.');
     Notification.setNotifications();
    } else {
        console.log('No Permission', Constants.lisDevice);
    }
    Notification.listenForNotifications();
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
