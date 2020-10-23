import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Constants, Permissions } from 'expo';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import DATA from "./data/dataBlogPost";
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
