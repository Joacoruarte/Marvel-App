import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import LogoTitle from './Components/LogoTitle';
import Detail from './Components/Detail';
import GoToFavourites from './Components/GoToFavourites';
import Favourites from './Components/Favourites';
import * as SecureStore from "expo-secure-store"

const Stack = createStackNavigator()
 
const App = () => { 

  useEffect(()=> {
    SecureStore.setItemAsync("favourites" , JSON.stringify([]))
  }, [])

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ 
            headerTitle: () => <LogoTitle/>,
            headerStyle: {              
              backgroundColor: '#000000',
              height: 120
            },
            headerRight: () => (
              <GoToFavourites/>
            )
          }}
        >
          <Stack.Screen 
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Detail'
            component={Detail}
          />
          <Stack.Screen
            name='Favourites'
            component={Favourites}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
