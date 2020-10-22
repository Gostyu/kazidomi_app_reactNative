import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import themeColor from '../theme/colors'
import themeText from '../theme/typography'
const PostHeader=({imgUrl})=>{
    return (
        <View style={styles.post_header}>
        <Image style={style.post_img} source={{uri=imgUrl}}></Image>
    </View>);
}
const PostBody=({category,title,description,date})=>{
  return (<View style={styles.post_body}>
                <Text style={styles.post_category}>{category}</Text>
                <Text style={styles.post_title}>{title}</Text>
                <Text style={styles.post_description}>{description}</Text>
                <Text style={styles.post_date}>{date}</Text>
     </View>)
}
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
    post_header:{
        width:270.37,        
        marginHorizontal:13.43,
        marginVertical:8,
        marginTop:16,
    },
    post_image:{
        width:243.5,
        height:141.06,
    },
    post_body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        fontFamily:"Roboto",
        width:261,
        height:109,
        padding:14.92,
    },
    post_category:{
        color:themeColor.LIGHTGREEN,
        fontSize:themeText.textCategoryFontSize,
    },
    post_title:{
        color:themeColor.DARKBLUE,
        fontSize:themeText.titleFontSize,
        fontWeight:'bold',
    },
    post_description:{
        color:themeColor.LIGHT_DARKBLUE,
        fontSize:themeText.textFontSize,
    },
    post_date:{
        color:themeColor.LIGHTGRAY,
        fontSize:themeText.textDateFontSize,
    }
})
export default Post
