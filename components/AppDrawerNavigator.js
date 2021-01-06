import React,{  Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';

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
    
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })