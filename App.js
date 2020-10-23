import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import DATA from "./data/dataBlogPost";
import Notification from "./components/Notification"
export default function App() {
  useEffect(() =>  {
    const getNoticaficationPermissionAndSetup= async ()=> {
      try{
      let {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status === 'granted') {
      console.log('Notification permissions granted.');
      Notification._setScheduledLocalNotification(DATA[0].title);
      } else {
          console.log('No Permission', Constants.lisDevice);
      }
      Notification.listenNotification();
      }catch(error){
        console.error(error)
      }
    }
    getNoticaficationPermissionAndSetup();
  },[])

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
