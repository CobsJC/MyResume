import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView, Image} from 'react-native';

class Home extends Component {
    state = { }
    render(){
        return(

        <View style ={styles.container}>
        
      <ScrollView>
            <Text style={styles.title}>About Me</Text>
            <View>
            <Text style={styles.text}>      Highly motivated individual with active listening skills, seeking a
                  training internship to strengthen my technical and personal
                  related skills while contributing my services to the profession.</Text>
                  <Image source={require('../re/me.png')} style={styles.me}/>
            </View>

            <Text style={styles.title}>Seminars Attended </Text>

            <View>
            <Text style={styles.titlesub}>             A.Y. 2019 - 2020 </Text>
            <Image source={require('../re/semi.png')} style={styles.semi}/>
            </View>

            <Text style={styles.text}>- Network VOIP and Telephony
                   Rivan School of Technology Inc.,
                   Held in Mendiola Square Building, Manila </Text>
            <Text style={styles.text}>-  Cyberscurity: Phishing Computer Engineering Department of UE,
                   Held in UE Manila</Text>
            <Text style={styles.text}>-    Introduction to Cloud Computing and Test Driven
                   Development
                   Computer Engineering Department of UE,
                   Held in UE Manila</Text>

            <View>
            <Text style={styles.titlesub}>             A.Y. 2018 - 2019 </Text>
            <Image source={require('../re/semi.png')} style={styles.semi}/>
            </View>

            <Text style={styles.text}>- Ethical Hacking (CoRES)
                   Computer Engineering Department of PUP,
                   Held in PUP Theater Manila</Text>
            <Text style={styles.text}>-     BlockChain (CoRES)
                   Computer Engineering Department of PUP,
                   Held in PUP Manila </Text>


            <Text style={styles.title}>Education</Text>  
            <View>
            <Text style={styles.text}>             2015 – present
                   BS Computer Engineering
                   University of the East-Manila</Text>
            <Image source={require('../re/edu.png')} style={styles.edu}/>
            </View>

            <View>
            <Text style={styles.text}>   2011 – 2015
                   Secondary Education
                   Meycauayan College</Text>
                   <Image source={require('../re/edu.png')} style={styles.edu}/>
            </View>
                   </ScrollView>
        </View> );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#f2f2f2"
       
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
        overflow: 'hidden',
        
       
            },
    titlesub:{
        margin: 20,
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
       

    },
    text:{
        textAlign: 'justify',
        paddingLeft:40,
        paddingRight:40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    me:{
        width: 26,
        height: 26,
        marginLeft: 55,
        marginTop:1,
        position: 'absolute',
        
    },
    semi:{
        width: 26,
        height: 26,
        marginLeft: 53,
        marginTop:10,
        position: 'absolute',
        
    },
    edu:{
        width: 26,
        height: 26,
        marginLeft: 55,
        marginTop:2,
        position: 'absolute',
        
    },
});