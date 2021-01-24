import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import StudentsScreen from '../screens/StudentsScreen';
import TeacherDetailsScreen  from '../screens/TeacherDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  Students : {
    screen : StudentsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  TeacherDetails : {
    screen : TeacherDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Students'
  }
);
