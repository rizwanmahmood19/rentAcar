import React ,{Component} from 'react'
import {Text,View,TextInput,Button,KeyboardAvoidingView,TouchableOpacity,AsyncStorage} from 'react-native'
import styles from './style.js';


 export default class Profile extends Component
{
  render(){
    const{heading,inputText,parent,button} = styles
    return(
      
      <View style={styles.parent}>
        <Text style={styles.heading}>Dashboard</Text>
      </View>
      
    );
  }
}