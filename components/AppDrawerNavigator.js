import React,{  Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyRequestScreen from '../screens/MyRequestsScreen'
import SettingScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen'

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Chat:{
      screen : ChatScreen,
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