import React,{  Component} from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StudentsScreen from '../screens/StudentsScreen'
import TeachersScreen from '../screens/TeachersScreen'
import {AppStackNavigator} from './AppStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({
  Students : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/student.png")} style={{width:20, height:20}}/>,
      
    }
  },
  Teachers: {
    screen: TeachersScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/teacher.png")} style={{width:20, height:20}}/>,
      
    }
  }
});

