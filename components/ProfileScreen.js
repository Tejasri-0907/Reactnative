import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileScreen({ setScreen }) {
  const [isPersonal, setIsPersonal] = useState(true);
  const [isProfessional, setIsProfessional] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  return (
    <View style={styles.gradientBackground}>
      <LinearGradient colors={[ '#B3A298', '#FFF2EA']} style={styles.linearGradient}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => console.log('Back clicked')}>
              <Icon name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, isPersonal && styles.activeTab]}
                onPress={() => {
                  setIsPersonal(true);
                  setIsProfessional(false);
                  setIsCompany(false);
                }}
              >
              <TouchableOpacity onPress={() => setScreen("Personal")}>
              <Text style={styles.tabText}>Personal</Text>
              </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, isProfessional && styles.activeTab]}
                onPress={() => {
                  setIsPersonal(false);
                  setIsProfessional(true);
                  setIsCompany(false);
                }}
              >
                <TouchableOpacity onPress={() => setScreen("Professional")}>
                <Text style={styles.tabText}>Professional</Text>
              </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, isCompany && styles.activeTab]}
                onPress={() => {
                  setIsPersonal(false);
                  setIsProfessional(false);
                  setIsCompany(true);
                }}
              >
                <Text style={styles.tabText}>Company</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileContainer}>
            <View style={styles.profileHeader}>
              <Image source={require('../asserts/doctor1.png')} style={styles.profileImage} />
              <Text style={styles.name}>Dr Vishnu Reddy</Text>
              <Text style={styles.specialization}>ENT</Text>
              
              <View style={styles.location}>
                <Icon name="location-outline" size={12} color="white" style={styles.heartIcon} />
                <Text style={styles.followerCount}>Hyderabad, India</Text>
              </View>

              <View style={styles.followerContainer}>
                <Icon name="heart-outline" size={20} color="white" style={styles.heartIcon} />
                <Text style={styles.followerCount}>7300 followers</Text>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>
                  <Icon name="share-social-outline" size={20} color="black" />
                  <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>Talks about #MicroSurgery, #ENT, #MicroSurgery, #ENT, #MicroSurgery, #ENT, #MicroSurgery, #ENT, #ENT... </Text>
            </View>
          </View>

          <View style={styles.feedContainer}>
            <View style={styles.feedRow}>
              <Image source={require('../asserts/1.png')} style={styles.feedImage} />
              <Image source={require('../asserts/2.png')} style={styles.feedImage} />
              <Image source={require('../asserts/3.png')} style={styles.feedImage} />
            </View>
            <View style={styles.feedRow}>
              <Image source={require('../asserts/4.png')} style={styles.feedImage} />
              <Image source={require('../asserts/5.png')} style={styles.feedImage} />
              <Image source={require('../asserts/6.png')} style={styles.feedImage} />
            </View>
            <View style={styles.feedRow}>
              <Image source={require('../asserts/7.png')} style={styles.feedImage} />
              <Image source={require('../asserts/8.png')} style={styles.feedImage} />
              <Image source={require('../asserts/9.png')} style={styles.feedImage} />
            </View>
            {/* Add more rows as needed */}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
  },
  activeTab: {
    backgroundColor: '#696969',
  },
  tabText: {
    fontSize: 14,
    color: 'white',
  },
  profileContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  specialization: {
    fontSize: 16,
    color: 'white',
  },
  location: {
    flexDirection: 'row',
    fontSize: 10,
    alignItems: 'center',
  },
  followerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 5,
  },
  followerCount: {
    fontSize: 14,
    color: 'white',
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followButton: {
    backgroundColor: '#00FF7F',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
  },
  shareButtonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  tagContainer: {
    marginTop: 10,
  },
  tagText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  feedContainer: {
    paddingVertical: 10,
  },
  feedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feedImage: {
    width: '32%',
    aspectRatio: 1,
    borderRadius: 10,
  },
});
