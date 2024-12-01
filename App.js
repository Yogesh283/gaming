// import React from "react";
// import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.imgmain}
//         source={{
//           uri: 'https://t3.ftcdn.net/jpg/02/61/51/60/360_F_261516074_1Hh3sUNRzCXufJ9GhN5cfkEZ6po1SBMK.jpg',
//         }}
//       >
//         <View style={styles.formContainer}>
//           <View style={styles.formBottomContainer}>
//             <View style={styles.formBottomSubContainer}>
//               <View style={styles.loginText}>
//                 <Text style={styles.login}>Login</Text>
                
//               </View>

//               {/* Email input container */}
//               <View style={styles.customInputContainer}>
//                 <TextInput
//                   style={[styles.textInput, styles.emailInput]}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   placeholder="Enter your email"
//                   placeholderTextColor="#888"
//                 />
//               </View>

//               {/* Password input container */}
//               <View style={styles.customInputContainer}>
//                 <TextInput
//                   style={[styles.textInput, styles.passwordInput]}
//                   autoCapitalize="none"
//                   secureTextEntry={true}
//                   placeholder="Enter your password"
//                   placeholderTextColor="#888"
//                 />
//               </View>

//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <TouchableOpacity style={styles.loginButton}>
//                   <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.loginButton}>
//                   <Text style={styles.buttonText}>Login with Demo ID</Text>
//                 </TouchableOpacity>
//               </View>
//               <View>
//                 <Text style={styles.footerText}>The site is Protected by Privacy Policy</Text>
//               </View>
//               <View style={styles.footerContainer}>
//                 <Text style={styles.footerText}>Register for An Account? </Text>
//                 <TouchableOpacity>
//                   <Text style={styles.footerLink}>signup</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   login: {
//     color: '#fff',
//     fontSize: 22,
//   },
//   loginText: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row'
//   },
//   imgmain: {
//     height: '100%',
//     width: '100%',
//     flex: 1,
//   },
//   formContainer: {
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
    
//   },
//   formBottomContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formBottomSubContainer: {
//     width: '80%', 
//     borderRadius: 10,
//     backgroundColor: 'rgba(127,127,127,0.6)',
//     padding: 20,
//   },
//   customInputContainer: {
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#04024F',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 5,
//     width: '100%',  // Ensure full width is applied
//   },
//   textInput: {
//     paddingHorizontal: 10,  // Adding horizontal padding to make the text aligned well
//     height: 40,
//     width: '100%',  // Ensure input fields take full width
//     borderRadius: 8,
//     borderWidth: 1,  // Make border consistent
//     borderColor: '#04024F',  // Apply a border to all inputs
//     backgroundColor: '#fff',  // Ensure a white background for all inputs
//   },
//   passwordInput: {
//     // Optional additional styling for password input (but ensure it is consistent)
//   },
//   loginButton: {
//     marginVertical: 10,
//     borderWidth: 2,
//     borderColor: '#212121',
//     backgroundColor: '#04024F',
//     alignItems: 'center',
//     padding: 10,
//     width: '100%',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   footerText: {
//     color: '#fff',
//   },
//   footerLink: {
//     marginLeft: 5,
//     color: '#02C38E',
//     fontWeight: 'bold',
//   },
//   eyeIcon: {
//     marginLeft: 10,
//   },

// });

// export default App;



import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./screens/login";
import home from "./screens/homePage/home";
import sinup from "./screens/signup";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
          name="Signup"
          component={sinup}
          options={{ headerShown: false }} />
        <stack.Screen
          name="Login"
          component={login}
          options={{ headerShown: false }} />
        <stack.Screen
          name="Home"
          component={home}
          options={{ headerShown: false }} /> 
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;