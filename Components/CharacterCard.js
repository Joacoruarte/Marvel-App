import React from 'react'
import { Image, StyleSheet, Text, View , TouchableOpacity } from 'react-native'

export default function CharacterCard({image , name , navigation , id }) {
  return (
    <TouchableOpacity style={styles.characterView} onPress={()=> navigation.navigate("Detail" , { id })}>
        <Image style={styles.image} source={{ uri: image}}/>
        <Text style={styles.text}>{name}</Text> 
    </TouchableOpacity>
  )
} 


const styles = StyleSheet.create({
    characterView: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#FA0704', 
        alignItems: 'center',
        marginTop: 30,
        marginVertical: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor : '#171717' , 
        shadowOffset : {width: -7, height: 7}, 
        shadowOpacity : 0.2 , 
        shadowRadius : 3 
    },  
    image: {
        width: 110,
        height: 110,
        padding: 0
    },
    text: {
        fontSize: 16,
        marginLeft: 20,
        color: "#FDFDFD"
    }
})