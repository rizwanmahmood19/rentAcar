import React ,{Component} from 'react'
import {Text,View,TextInput,Button,KeyboardAvoidingView,TouchableOpacity,AsyncStorage} from 'react-native'
import styles from './style.js';
import { StackNavigator } from 'react-navigation';
 export default class Login extends Component
{
constructor(props){
super(props);
this.state={
  username:'',
  password:'',
 }
}
componentDidMount(){
    this._loadInitialState().done();
}
_loadInitialState = async () =>{
  var value = await AsyncStorage.getItem('users');
  if(value !== null)
  {
    this.props.navigation.navigate('Profile');
  }
}
  render(){
    const{heading,inputText,parent,button} = styles
    return(      
      <View style={styles.parent}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={inputText}
          placeholder="Email"
          onChangeText={(username)=> this.setState({username})}
         />
        <TextInput
          style={inputText}
          placeholder="Password"
          onChangeText={(password)=> this.setState({password})}
          secureTextEntry={true}
        />
        <TouchableOpacity           
          onPress={this.Login}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>      
    );
  }
  Login = ()=>{
    //alert(this.state.username);

     fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
              })
    })

    .then((response) => response.json())
    .then((res) => {
      //alert(res.message);
      //console.log(res.message);
       if(res.success === true)
       {
         AsyncStorage.setItem('user',res.user);
         this.props.navigation.navigate('Profile');
       }
       else
       {
         alert(res.message);
       }
    })
    .done();
  }
}