import React, { Component} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>

        <ScrollView 
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        >


          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          {/* <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View> */}

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  box1:{
    backgroundColor: 'red',
    height: 300,
    // width:150
  },
  box2:{
    backgroundColor: 'yellow',
    height: 300,
    // width:150
  },
  box3:{
    backgroundColor: 'blue',
    height: 300,
    // width:150
  },
  box4:{
    backgroundColor: 'orange',
    height: 300,
    // width:150
  },
});