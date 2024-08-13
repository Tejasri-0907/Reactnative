import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

const users = [
  {
    id: 1,
    name: 'Dr. Vishnu Reddy',
    status: 'Available',
    specialty: 'Dentist',
    image: require("../asserts/doctor1.png")
  },
  {
    id: 2,
    name: 'Dr. Anjali Sharma',
    status: 'Available',
    specialty: 'Cardiologist',
    image: require("../asserts/doctor2.png")
  },
  {
    id: 3,
    name: 'Dr. Karan Singh',
    status: 'Not Available',
    specialty: 'Neurologist',
    image: require("../asserts/doctor3.png")
  },
  {
    id: 4,
    name: 'Dr. Arun Kumar',
    status: 'Available',
    specialty: 'Neurologist',
    image: require("../asserts/doctor4.png")
  },
  {
    id: 5,
    name: 'Dr. Suresh Kumar',
    status: 'Not Available',
    specialty: 'Neurologist',
    image: require("../asserts/doctor5.png")
  },
  // Add more doctorssss as needed
];

export default function UsersList({ setScreen }) {
  return (
    <ImageBackground source={require("../asserts/bg.png")} style={styles.bgImg}>
      <Text style={styles.heading}>Doctors List</Text>
      <ScrollView>
        {users.map(user => (
          <View key={user.id} style={styles.userCard}>
            <View style={styles.row}>
              <Image source={user.image} style={styles.logo} />
              <View style={styles.userInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.username}>{user.name}</Text>
                  <Text style={[styles.timestamp, user.status === 'Available' ? styles.available : styles.notAvailable]}>
                    {user.status}
                  </Text>
                </View>
                <Text style={styles.details}>{user.specialty}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setScreen("ProfileScreen")}>
              <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
    
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F4F8",
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  userCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    margin: 15,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "bold",
    color: "#333333",
    fontSize: 18,
  },
  timestamp: {
    fontSize: 14,
    fontWeight: "bold",
  },
  available: {
    color: "green",
  },
  notAvailable: {
    color: "red",
  },
  details: {
    marginTop: 5,
    color: "#666666",
  },
  heading: {
    color: "#2C3E50",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    width: 120,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
