import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostList from "./PostList";
import themeColor from "../theme/colors"
import themeText from '../theme/typography'

const AppBody = ({dataPost}) => {
    return (
        <View style={styles.appBody}>
        <Text style={styles.appBodyTitle}>Derniers articles</Text>
        <PostList style={styles.postList} dataPost={dataPost}/>
      </View>
    )
}

export default AppBody

const styles = StyleSheet.create({
      appBody : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
      },
      postList:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      appBodyTitle:{
        alignSelf:"flex-start",
        left:27,
        color:themeColor.DARKBLUE,
        fontWeight:'bold',
        fontSize:themeText.appTitleFontSize,
      }
})
