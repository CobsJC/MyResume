import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

class Contacts extends Component {
    state = { }
    render(){
        return(
            <View >

            <Text style={styles.title}> Address</Text>
            
            <View >
            <Text style={styles.text}>Sanville Homes, Meycauayan
             City , Bulacan</Text>
             <Image source={require('../re/add.png')} style={styles.add}/>
             </View>

            <Text style={styles.title}>Phone Number</Text>

            <View>
            <Text style={styles.text}>0905 508 3936</Text>
            <Image source={require('../re/cp.png')} style={styles.cp}/>
            </View>


            <Text style={styles.title}>Email Address</Text>

            <View>
            <Text style={styles.text}>cobarrubias.johncarlo@ue.edu.ph</Text>
            <Image source={require('../re/gm.png')} style={styles.gm}/>
            </View>

        </View> );
        
    }
}

export default Contacts;

const styles = StyleSheet.create({
    container: {
        
       
     
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
        paddingLeft:50,
        paddingRight:40,
        fontSize: 18,
        fontWeight: 'bold',
        
            },
    add: {
        width: 26,
        height: 26,
        marginLeft: 15,
        marginTop:4,
        position: 'absolute',
    },
    cp:{
        width: 24,
        height: 24,
        marginLeft: 15,
        marginTop:4,
        position: 'absolute',
    },
    gm:{
        width: 24,
        height: 24,
        marginLeft: 15,
        marginTop:4,
        position: 'absolute',
    },

});