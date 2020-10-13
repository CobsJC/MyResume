import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Others extends Component {
    state = { }
    render(){
        return(<View style ={styles.container}>


           
           
            <Text style={styles.title}>Mission</Text>
           
            
            <View>
            <Text style={styles.text}>  To be able to gradute this semester without causing any trouble in all of my subject.</Text>
            <Image source={require('../re/mis.png')} style={styles.mis}/>
            </View>
            
            
            <Text style={styles.title}>Vision</Text>
            
           
            <View>
            <Text style={styles.text}>    To be known on what ever my path I'm taking  in the future and to have a stable job. </Text>
            <Image source={require('../re/vis.png')} style={styles.vis}/>
            </View>

        </View> );
    }
}

export default Others;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    title:{
        margin: 20,
        paddingLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#bc544b',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        overflow: 'hidden'
            },
     text:{
        textAlign: 'justify',
        paddingLeft:40,
        paddingRight:40,
        fontSize: 20,
        fontWeight: 'bold',      
            },
    mis:{
        width: 26,
        height: 26,
        marginLeft: 34,
        marginTop:3,
        position: 'absolute',
    },
    vis:{
        width: 26,
        height: 26,
        marginLeft: 36,
        marginTop:4,
        position: 'absolute',
        
    },



});