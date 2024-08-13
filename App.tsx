// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//   return (
//     <SafeAreaView>
//     <View>
//       <Text>TEJA eyuuuuuuuu</Text>
//     </View>
//     </SafeAreaView>
       
//   );
// }
// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider as PaperProvider } from 'react-native-paper';

// import HomeScreen from './screens/HomeScreen';
// import TaskEditScreen from './screens/TaskEditScreen';

// const Stack = createStackNavigator();

// const App: React.FC = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TODO App' }} />
//           <Stack.Screen name="TaskEdit" component={TaskEditScreen} options={{ title: 'Edit Task' }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }

// export default App;

// import React from 'react'
// import { View, Text} from 'react-native';

// export default function App() {
//   return (
//     <View>
//       <Text>Hello world</Text>
//     </View>
//   )
// }

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import UsersList from './components/UsersList';  // Update the path accordingly
// import Doctor1 from './components/Doctor1';      // Update the path accordingly
// // Add other doctor pages if needed

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="UsersList">
//         <Stack.Screen name="UsersList" component={UsersList} />
//         <Stack.Screen name="Doctor1" component={Doctor1} />
//         {/* Add other doctor screens here */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
