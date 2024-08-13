import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register({setScreen}) {
  return (
    <ImageBackground source={require("../asserts/bg.png")} style={styles.bgImg}>
      <Icon name="person-circle-outline" size={100} color="white" />
      <Text style={styles.title}>Create account</Text>

      <View style={styles.inputs}>
      <TextInput placeholder="Phone, email or username" placeholderTextColor="white" style={styles.input}/>
      <TextInput placeholder="Password" placeholderTextColor="white" secureTextEntry={true} style={styles.input}/>
      </View>

      <TouchableOpacity onPress={() => setScreen("Login")}>
        <Text style={styles.login}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.create} onPress={() => setScreen("Login")}>Already Have An Account? Login</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImg:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: "100%" // Example background color, adjust as needed
  },
  title:{
    fontSize:30,
    color:"white"
  },
  input:{
    elevation:1,
    borderRadius:100,
    padding:10,
    margin:10,
    width:350,
    textAlign:"center",
    fontSize:20,
    backgroundColor:"peach"
  },
  login:{
    elevation:1,
    borderRadius:100,
    padding:10,
    margin:10,
    width:350,
    textAlign:"center",
    fontSize:20,
    backgroundColor:"white",
    color:"peach"
  },
  create:{
    fontSize: 20,
    color: "white",
    margin: 10
  },
  inputs:{
    margin:30
  }
});
