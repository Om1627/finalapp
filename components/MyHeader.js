import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

 const MyHeader =props=>{
    
        return(
            <Header
              leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={()=>props.navigation.toggleDrawer()} />}
              centerComponent={{ text: props.title, style: { color: '#006666', fontSize:20,fontWeight:"bold", } }}
              style={{width:'100%'}}
               backgroundColor = "#5e96b9"
            />
    
    );
    
}
export default MyHeader;
