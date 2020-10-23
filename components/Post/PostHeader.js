import React from 'react'
import { StyleSheet, View,Image } from 'react-native'
const PostHeader=({imgUrl})=>{
    return (<View style={styles.post_header}>
         <Image style={styles.post_img} 
         source={{uri:imgUrl}}/>
    </View>);
}
const styles = StyleSheet.create({
    post_header:{
        width:270.37,        
        marginHorizontal:13.43,
        marginVertical:8,
        marginTop:16,
    },
    post_img:{
        width:243.5,
        height:141.06,
    },
})
export default PostHeader