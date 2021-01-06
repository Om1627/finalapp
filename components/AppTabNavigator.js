import React,{  Component} from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StudentsScreen from '../screens/StudentsScreen'
import TeachersScreen from '../screens/TeachersScreen'


export const AppTabNavigator = createBottomTabNavigator({
  Students : {
    screen: StudentsScreen,
    
  },
  Teachers: {
    screen: TeachersScreen,
    
  }
});

