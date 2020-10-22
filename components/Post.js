import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import themeColor from '../theme/colors'
import themeText from '../theme/typography'
const Post = ({imgUrl,category,title,description,date}) => {
    return (
        <View style={styles.card}>
            <View style={styles.card_header}>
                <Image style={style.card_img} source={{uri=imgUrl}}></Image>
            </View>
            <View style={styles.card_body}>
                <Text style={styles.card_category}>{category}</Text>
                <Text style={styles.card_title}>{title}</Text>
                <Text style={styles.card_description}>{description}</Text>
                <Text style={styles.card_date}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
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
    card_header:{
        width:270.37,        
        marginHorizontal:13.43,
        marginVertical:8,
        marginTop:16,
    },
    card_image:{
        width:243.5,
        height:141.06,
    },
    card_body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        fontFamily:"Roboto",
        width:261,
        height:109,
        padding:14.92,
    },
    card_category:{
        color:themeColor.LIGHTGREEN,
        fontSize:themeText.textCategoryFontSize,
    },
    card_title:{
        color:themeColor.DARKBLUE,
        fontSize:themeText.titleFontSize,
        fontWeight:'bold',
    },
    card_description:{
        color:themeColor.LIGHT_DARKBLUE,
        fontSize:themeText.textFontSize,
    },
    card_date:{
        color:themeColor.LIGHTGRAY,
        fontSize:themeText.textDateFontSize,
    }
})
export default Post
