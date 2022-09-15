import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { FlatList, StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import { useGetCharacters } from '../hooks/useGetCharacters';
import CharacterCard from './CharacterCard'

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const { loading , getCharacters} = useGetCharacters()
  const { searchCharacter} = useGetCharacters()
  
  useEffect(() => {
    getCharacters()
    .then(res => {  
      setData(res)
    })
    .catch(err => console.log(err))
  }, []);


  useEffect(()=> {
    if(search.length > 0){
      searchCharacter(search)
      .then(res => {  
        setData(res)
      })
      .catch(err => console.log(err))
    }else{
      getCharacters()
      .then(res => {  
        setData(res)
      })
      .catch(err => console.log(err))
    }
  }, [search])

  return (
    <View stlye={styles.ContainerHome}>
        <Searchbar
          placeholder="Search for character..."
          onChangeText={value => setSearch(value)}
          value={search}
          onIconPress={searchCharacter}
          onSubmitEditing={searchCharacter}
        />
        {loading ? (
          <ActivityIndicator style={styles.loading} size="large" color="#EC1D24" />
        ) : (
          <FlatList 
              data={data}
              renderItem={({item}) => 
                  <>
                      <CharacterCard image={`${item.thumbnail.path}.${item.thumbnail.extension}`} name={item.name} id={item.id} navigation={navigation}/>
                  </>
              }
          />
        )}
    </View>
  )
}


const styles = StyleSheet.create({
  ContainerHome: {
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 30
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 390, 
    bottom: 0,
    alignItems: 'center', 
    justifyContent: 'center',
  }
})
