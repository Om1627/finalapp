import React, { Component } from 'react';
import { StyleSheet, View, FlatList,Text,TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import SwipeableFlatlist from '../components/SwipeableFlatlist';
import db from '../config';


export default class NotificationScreen extends Component{
  constructor(props) {
    super(props);

    this.state = {
      userId :  firebase.auth().currentUser.email,
      allNotifications : []
    };

    this.notificationRef = null
  }

  getNotifications=()=>{
    this.notificationRef = db.collection("all_notifications")
    .where("notification_status", "==", "unread")
    .where("targeted_user_id",'==',this.state.userId)
    .onSnapshot((snapshot)=>{
      var allNotifications =  []
      snapshot.docs.map((doc) =>{
        var notification = doc.data()
        notification["doc_id"] = doc.id
        allNotifications.push(notification)
      });
      this.setState({
          allNotifications : allNotifications
      });
    })
  }
  updateMarkAsread =()=>{
    db.collection("all_notifications").doc(this.state.allNotifications.doc_id).update({
      "notification_status" : "read"
    })
    db.collection("all_requests").where("requested_to",'==',this.state.allNotifications.targeted_user_id).update({
        "request_status" : "accepted"
      })
  }
  componentDidMount(){
    this.getNotifications()
  }

  componentWillUnmount(){
    this.notificationRef()
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({item,index}) =>{
      return (
        <View>
        <ListItem
          key={index}
          leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
          title={item.student_id}
          titleStyle={styles.LiTitle}
          subtitle={item.message}
          bottomDivider
        />
        <TouchableOpacity onPress={()=>{this.updateMarkAsread()}}><Text>Accept</Text></TouchableOpacity>
        </View>
        
      )
 }


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.13}}>
          <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
        </View>
        <View style={{flex:0.8}}>
          {
            this.state.allNotifications.length === 0
            ?(
              <View style={styles.imageView}>
               
                <Text style={{fontSize:25}}>You have no notifications</Text>
              </View>
            )
            :(
          <FlatList keyExtractor={this.keyExtractor} data={this.state.allNotifications} renderItem={this.renderItem}/>
            )
          }
        </View>
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
