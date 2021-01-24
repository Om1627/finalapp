import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
 ListItem
} from "react-native";
import db from "../config";
import firebase from "firebase";
import MyHeader from '../components/MyHeader';

export default class StudentsScreen extends Component{
  constructor(){
    super()
    this.state={
      allteachers:[]
    }
  }
  
  getAllTeachers=()=>{
    this.ref = db.collection('users').where("user_domain","==",'Teacher')
    .onSnapshot((snapshot)=>{
      var allteachers =  []
      snapshot.docs.map((doc) =>{
        var teacher = doc.data()
        teacher["doc_id"] = doc.id
        allteachers.push(teacher)
      });
      this.setState({
          allteachers : allteachers
      });
    })
  }

  componentDidMount(){
    this.getAllTeachers()
  }
render(){
  return(
    
    <View>
<MyHeader title='Students screen' navigation={this.props.navigation}/>
<FlatList
                data={this.state.allteachers}
                renderItem={({ item }) => (
                  <View style={{backgroundColor:'lightgrey',marginTop:50}}>
 
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center',marginLeft:25}}>
                    {item.first_name} {item.last_name}
                  </Text>
                  
                  <TouchableOpacity style={{backgroundColor:'#85af96',alignSelf:'flex-end',marginRight:20,padding:5,margin:10}} onPress={() => {
              this.props.navigation.navigate("TeacherDetails", {
                details: item,
              });
            }}>
          <Text style={{fontSize:15,fontWeight:"bold"}}>View</Text>
        </TouchableOpacity>
                  
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
               
                /> 

    
  {console.log(this.state.allteachers)}

           
      

 </View>
   
      
    
  )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:'#deeeed'
  },
  imageView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  LiTitle:{
    color: 'black',
    fontWeight: 'bold'
  }
})