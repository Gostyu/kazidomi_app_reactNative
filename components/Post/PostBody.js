import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themeColor from '../../theme/colors'
import themeText from '../../theme/typography'

const PostBody=({category,title,description,date})=>{
    return (<View style={styles.post_body}>
                  <Text style={styles.post_category}>{category}</Text>
                  <Text style={styles.post_title}>{title}</Text>
                  <Text style={styles.post_description}>{description}</Text>
                  <Text style={styles.post_date}>{date}</Text>
       </View>);
}
const styles = StyleSheet.create({
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
export default PostBody
