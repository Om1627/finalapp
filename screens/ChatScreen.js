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
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class ChatScreen extends Component{
    render(){
        return(
            <View>
                <Text>Chat Screen</Text>
            </View>
        )
    }
}