import React from 'react'
import { Image, StyleSheet, Text , TouchableOpacity, TouchableHighlight, Alert, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import * as SecureStore from "expo-secure-store"

export default function CharacterCard({favourites , image , name , navigation , id }) {
  
  return (
    <View style={styles.containerCharacter}>
        <TouchableOpacity style={styles.characterView} 
            onPress={()=> navigation.navigate("Detail" , { id })} 
        >
            <Image style={styles.image} source={{ uri: image }}/>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
        {!favourites && (
            <TouchableHighlight style={styles.containerStar} onPress={()=> Alert.alert(`Vas a agregar a ${name} a favoritos` , "¿Estas seguro que quieres agregar este personaje?", [{
                text: "Agregar",
                onPress: async() => {
                    let characters = await SecureStore.getItemAsync("favourites")
                    if(characters.length > 0){
                        characters = JSON.parse(characters)
                        characters.push({id , name , image})
                        await SecureStore.setItemAsync("favourites" , JSON.stringify(characters))
                    }
                }
            },
            {
                text: "Cancelar",
            }
            ])}>
                <MaterialCommunityIcons name="star" color="#FDFDFD" size={30} />
            </TouchableHighlight>
        )}
    </View>
  )
} 


const styles = StyleSheet.create({
    containerCharacter: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
    },  
    containerStar: {
        display: 'flex',
        height: 110,
        justifyContent: 'center',
        marginLeft: -32,
        backgroundColor: "#00489A",
        marginTop: 30,
        padding: 5
    },
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