import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersonalInfoScreen, ProfilePhotoScreen} from '../screens';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PersonalInfoScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name="ProfilePhotoScreen"
          component={ProfilePhotoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
