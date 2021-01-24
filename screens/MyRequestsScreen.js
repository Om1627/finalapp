import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import MyHeader from "../components/MyHeader.js";
import firebase from "firebase";
import db from "../config.js";

export default class MyRequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      donorName: "",

      allrequests: [],
    };
    this.requestRef = null;
  }

  static navigationOptions = { header: null };

  

  getallrequests = () => {
    this.requestRef = db
      .collection("all_requests")
      .where("requested_by", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        var allrequests = [];
        snapshot.docs.map((doc) => {
          var donation = doc.data();
          donation["doc_id"] = doc.id;
          allrequests.push(donation);
        });
        this.setState({
          allrequests: allrequests,
        });
      });
  };

  

 

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => (
    <ListItem
      key={i}
      title={item.date}
      subtitle={
        "You requested "+ item.requested_to + " to study with you"+
        "\nStatus: " + item.request_status
      }
      
      titleStyle={{ color: "black", fontWeight: "bold" }}
     
      bottomDivider
    />
  );

  componentDidMount() {
    
    this.getallrequests();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="My Requests" />
        <View style={{ flex: 1 }}>
          {this.state.allrequests.length === 0 ? (
            <View style={styles.subtitle}>
              <Text style={{ fontSize: 20 }}>List of all your Requests</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allrequests}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
  subtitle: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
