import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import FlashMessage from "react-native-flash-message";
// import { Navigation } from "react-native-navigation";
import store from './store/store';
import SaveAreaView from './src/components/SafeAreaView';
import Signup from './src/components/auth/Signup';
import {Login} from './src/components/auth/Login';
import SafeArea from './src/components/SafeAreaView';
// import {Provider} from 'react-native-paper';
// import Dashboard from "./src/components/screems/Dashboard";

// const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <SafeArea /> */}
        <Signup />
      </SafeAreaView>
    </Provider>
    // <Provider store={store}>
    //   <SafeAreaView>
    //     <SafeAreaView />
    //     <View>
    //       <Text>Hello</Text>
    //     </View>
    //   </SafeAreaView>
    //   <SafeAreaView>
    // 			<NavigationContainer>
    // 				<Stack.Navigator>
    // 					<Stack.Screen
    // 						name="Home"
    // 						component={Signup}
    // 						options={{ title: "Signup" }}
    // 					/>
    // 					<Stack.Screen
    // 						name="Login"
    // 						component={Login}
    // 						options={{ title: "Login" }}
    // 					/>
    // 					<Stack.Screen name="Dashboard" component={Dashboard} />
    // 				</Stack.Navigator>
    // 			</NavigationContainer>
    // 			<FlashMessage position="bottom" />
    // 		</SafeAreaView>
    // </Provider>
  );
}

// registerRootComponent(App)
