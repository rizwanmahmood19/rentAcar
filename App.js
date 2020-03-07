import React ,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import Login from './Login.js';
import Profile from './Profile.js';
import styles from './style';
 export default class App extends Component
{
  
  render(){
    return(    
        <Login />       
    );
  }
}
