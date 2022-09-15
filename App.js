import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import LogoTitle from './Components/LogoTitle';
import Detail from './Components/Detail';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ 
        headerTitle: () => <LogoTitle/>,
        headerStyle: {              
          backgroundColor: '#000000',
          height: 120
        }
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
