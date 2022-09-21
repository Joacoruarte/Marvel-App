import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'

export default function GoToFavourites() {
  const navigation = useNavigation() 
  return (
    <View>
        <Button title='Favourites' color="#FDFDFD" onPress={()=> navigation.navigate("Favourites")} />
    </View>
  )
}
