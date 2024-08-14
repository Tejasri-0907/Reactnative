import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Login from './Login';
import Register from './Register';
import UsersList from './UsersList';
import ProfileScreen from './ProfileScreen';  // Import ProfileScreen component
import Personal from './Personal';   


const slides = [
  {
    key: 1,
    title: 'Profile Customization',
    text: 'Personal, Professional, and Company tabs with switches. Dynamic background based on profile picture colors.',
    image: require('../asserts/logo1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Interactive Features',
    text: 'Follow, Share, and Connect buttons with verification badges. Hashtags and more!',
    image: require('../asserts/logo2.png'),
    backgroundColor: '#59b2ab',
  },
  // {
  //   key: 3,
  //   title: 'Feeds & Stories',
  //   text: 'Explore a 3x3 matrix feed with Instagram-like stories. Tap to view feeds in detail!',
  //   image: require('../asserts/logo3.png'),
  //   backgroundColor: '#59b2ab',
  // },
];

export default function OnboardingScreen() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [screen, setScreen] = useState("Register");

  const _renderItem = ({ item }) => {
    return (
      <ImageBackground source={require("../asserts/bg.png")} style={styles.bgImg}>
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp) {
    if (screen === "Register") {
      return <Register setScreen={(text) => setScreen(text)} />;
    } else if (screen === "Login") {
      return <Login setScreen={(text) => setScreen(text)} />;
    } else if (screen === "UsersList") {
      return <UsersList setScreen={(text) => setScreen(text)} />;
    } else if (screen === "ProfileScreen") {
      return <ProfileScreen setScreen={(text) => setScreen(text)} />;
    } else if (screen === "Personal") {
      return <Personal setScreen={(text) => setScreen(text)} />;
    } 
  } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />;
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 80,
    resizeMode: 'contain',
  },
  bgImg: {
    width: "100%",
    height: "100%"
  }
});


