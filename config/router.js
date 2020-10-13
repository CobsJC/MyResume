import 'react-native-gesture-handler';
import {createAppContainer} from "react-navigation";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/home";
import Contacts from "../screens/contacts";
import Others from "../screens/others";
import React, {Component} from 'react';
import {View,Text,StyleSheet, Image} from "react-native";

const Tabs = createMaterialTopTabNavigator({
    Home: {
        screen : Home,
        navigationOptions : {
            tabBarLabel :({}) => (
                <View style={styles.Container}>
                   
                    <Text style = {{color: '#bc544b'}}>OVERVIEW</Text>
               </View>
            ),
        },
    },
    Contacts: {
        screen : Contacts,
        navigationOptions : {
            tabBarLabel :({}) =>(
                <View style={styles.Container}>
                    
                    <Text style = {{color: '#bc544b'}}>CONTACTS</Text>
               </View>
            ),
        },
    },
    Others: {
        screen : Others,
        navigationOptions : {
            tabBarLabel :({}) =>(
                <View style={styles.Container}>
                    
                    <Text style = {{color: '#bc544b'}}>MISSION/VISION</Text>
               </View>
            ),
        },
    },
},
{
    initialRouteName: "Home",
    lazyLoad: true,
    tabBarPosition : "bottom",
    swipeEnabled: true,
    tabBarOptions :{
        style: {
            hegiht : 50,
            backgroundColor : "#dddddd",
            paddingBottom: 3,
            paddingTop : 3,
        },
        indicatorStyle:{
            backgroundColor: '#bc544b',
            elevation: 10,
        },
        activeTintColor: '#bc544b',
        inacctiveTintColor : 'gray',
    }
},
);

const MainScreenNavigator = createStackNavigator({
    Tabs :{
        screen: Tabs,
        navigationOptions: {
            title : 'COBARRUBIAS,JOHN CARLO G.',
            headerStyle:{
                backgroundColor : '#40404c',
            },
            headerTitleStyle: {
                color: '#fff',
                fontWeight: 'bold',
            },
        },
    },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems : "center",
        alignContent: "center",
        fontWeight: 'bold',
    },
});