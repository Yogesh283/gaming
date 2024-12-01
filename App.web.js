import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./screens/login";
import home from "./screens/homePage/home";
import sinup from "./screens/signup";
import countryList from "./screens/homePage/countryList";
import gameList from "./screens/homePage/gameList";
import liveSection from "./screens/homePage/liveSecton";
import playGame from "./screens/homePage/playGame";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
      <stack.Screen
          name="Home"
          component={home}
          options={{ headerShown: false }} /> 
     
      <stack.Screen
          name="playGame"
          component={playGame}
          options={{ headerShown: false }} />
      <stack.Screen
          name="Login"
          component={login}
          options={{ headerShown: false }} />
      <stack.Screen
          name="liveSection"
          component={liveSection}
          options={{ headerShown: false }} />
      <stack.Screen
          name="gameList"
          component={gameList}
          options={{ headerShown: false }} /> 
      <stack.Screen
          name="CountryList"
          component={countryList}
          options={{ headerShown: false }} />
      <stack.Screen
          name="Signup"
          component={sinup}
          options={{ headerShown: false }} />
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;