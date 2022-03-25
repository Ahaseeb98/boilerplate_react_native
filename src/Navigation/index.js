import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {ROUTES} from './Routes';
const Stack = createNativeStackNavigator();

function Navigation() {


  return  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {ROUTES.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.path}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  
}

export default Navigation;
