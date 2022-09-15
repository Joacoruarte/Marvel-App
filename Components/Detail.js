import React, { useEffect, useState } from 'react'
import { Text, View , ActivityIndicator, StyleSheet, FlatList} from 'react-native'
import { useGetDetailOfCharacter } from '../hooks/useGetDetailOfCharacter'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from './Information';
import Comics from './Comics';

const Tab = createBottomTabNavigator();

export default function Detail({ navigation , route }) {
    const { id } = route.params
    const [data , setData] = useState([])
    const [comics , setComics] = useState([])
    const { loading , getCharacterInfo } = useGetDetailOfCharacter()
    const { loading: loadingComics , getCharacterComics } = useGetDetailOfCharacter()
    useEffect(()=> { 
      if(!data.length && !comics.length){
        getCharacterInfo(id)
          .then(res => setData(res))
          .catch((err) => console.log("🚀 ~ file: Detail.js ~ line 13 ~ useEffect ~ err", err))
        getCharacterComics(id)
        .then(res => setComics(res))
        .catch(err => console.log(err))
      }
    }, [])

  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        tabBarActiveTintColor: 'darkred'
      }}
    >
      <Tab.Screen 
        name="Information" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle" color={color} size={size} />
          )
        }}
      >
        {props => <Information {...props} data={data} loading={loading}/>}
      </Tab.Screen>
      <Tab.Screen 
        name="Comics" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          )
        }}
      >
        {props => <Comics {...props} comics={comics} loading={loadingComics}/>}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{loading 
  ? <ActivityIndicator style={styles.loading} size="large" color="#EC1D24" /> 
  : (
    <FlatList
      data={data}
      renderItem={({item}) => 
        <>

        </>
      }
    />
  )}
</View> */}
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})
