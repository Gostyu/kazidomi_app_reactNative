import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostList from "./PostList";

const AppBody = ({dataPost}) => {
    return (
        <View style={styles.appBody}>
        <Text>Derniers articles</Text>
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
})
