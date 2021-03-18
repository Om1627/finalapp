import React,{  Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyRequestScreen from '../screens/MyRequestsScreen'
import SettingScreen from '../screens/SettingsScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
 
    Setting : {
      screen : SettingScreen
    },
    MyRequests:{
      screen:MyRequestScreen
        },
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })