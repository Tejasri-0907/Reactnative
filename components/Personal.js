import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Image source={require('../asserts/doctor1.png')} style={styles.profileImage} />
      <Text style={styles.text}>Personal Detail</Text>
      <Text style={styles.name}>Dr Vishnu Reddy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,  
    height: 100, 
    borderRadius: 50, 
    marginBottom: 20, 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,  
    color: '#333', 
    marginTop: 10, 
  },
});
