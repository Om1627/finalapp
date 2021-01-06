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
    this.ref=null
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

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item,index}) =>{
      return (
        <View>
        <ListItem
          key={index}
      
          title={item.first_name}
          titleStyle={styles.LiTitle}
          
          bottomDivider
        />
      <View>
        <TouchableOpacity style={{backgroundColor:'#85af96'}}>
          <Text>Request</Text>
        </TouchableOpacity>
      </View>
        </View>
      )
 }
      
 
componentDidMount(){
  this.getAllTeachers()
}

componentWillUnmount(){
  this.ref()
}
 
    render(){
        return(

          
            <View style={styles.container}>
              <MyHeader title='Students Screen' navigation={this.props.navigation}/>
               {
            this.state.allteachers.length === 0
            ?(
              <View style={styles.imageView}>
               
                <Text style={{fontSize:25}}>There are no teachers available</Text>
              </View>
            )
            :(
              <FlatList keyExtractor={this.keyExtractor} data={this.state.allteachers} renderItem={this.renderItem}/>
            )
          }
          
          {
            console.log(this.state.allteachers)
          }
               

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
