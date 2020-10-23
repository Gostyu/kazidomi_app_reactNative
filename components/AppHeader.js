import React from 'react';
import { StyleSheet, View,Image,Dimensions} from 'react-native';

const widthDevice = Dimensions.get("window").width;
const AppHeader = () => {
    return (<View style={styles.header}>
             <Image source={require("../assets/kazidomi-logo-resp.png")}></Image>
        </View>)
};

const styles = StyleSheet.create({
    header:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:widthDevice,
        height:87,
    },
})
export default AppHeader
