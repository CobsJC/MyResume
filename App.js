import React, {Component} from 'react';
import {View, StyleSheet, StatusBar,ImageBackground,Image} from 'react-native';
import MainScreenNavigator from "./config/router";

class App extends Component{
  state = {};
  render() {
    return (
      <View style ={styles.container}>

        
        <Image style={{width:100, height:100,borderRadius: 40, marginLeft:145}}
            source={require('./re/carlo.png')}/>

        
        <StatusBar backgroundColor='#40404c' barStyle="light-content" />
      <MainScreenNavigator />
      </View> 
    );
  };
};

export default App;

const styles = StyleSheet.create({
  container:{
  flex: 1,
  
   },
});

