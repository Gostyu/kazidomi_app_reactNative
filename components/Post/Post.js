import React from 'react'
import { StyleSheet, View } from 'react-native'
import themeColor from '../../theme/colors'
import PostHeader from './PostHeader'
import PostBody from './PostBody'

const Post = ({imgUrl,category,title,description,date}) => {
    return (
        <View style={styles.post}>
           <PostHeader imgUrl={imgUrl}/>
            <PostBody category={category}
                title={title}
                description={description}
                date={date}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        width:270.37,
        height:288.84,
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        borderRadius:8.4,
        elevation:2,
        shadowColor:themeColor.BLURRED_BLUE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.57,
        marginTop:13,
        marginBottom:29,
        paddingBottom:15.59,
    },
})
export default Post
