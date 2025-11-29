import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import { View, Text } from "react-native";
import { requestUserPermission, setupBackgroundHandler } from "./src/components/NotificationService";
import messaging from "@react-native-firebase/messaging";
import { useEffect } from 'react';
import Notification from './src/components/NotificationService';
// Import your real HomeScreen UI
import HomeScreen from '../pages/HomeScreen';
import UsersScreen from '../pages/UserScreen';
import SplashScreen from '../pages/SplashScreen';

const Tab = createBottomTabNavigator();


useEffect(() => {
    requestUserPermission();
    setupBackgroundHandler();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("Message received in foreground:", remoteMessage);
    });

    return unsubscribe;
  }, []);


function MenuScreen() {
  return <View><Text style={{ fontSize: 30 }}>Menu Screen</Text></View>;
}

export default function App() {
  return (
    <NavigationContainer>
       
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: { height: 65 },
          tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
        }}
      >

        {/* HOME */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={26} color={focused ? "#ff4d4d" : "#333"} />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersScreen}
          options={{
            tabBarIcon: () => <Icon name="users" size={26} color="#333" />,
          }}
        />

        {/* CHATS */}


        <Tab.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="activity" size={26} color={focused ? "#ff4d4d" : "#333"} />
            ),
            tabBarLabel: "Splash"
          }}
        />


        {/* NOTIFICATIONS */}
          <Tab.Screen
          name="Users"
          component={Notification}
          options={{
            tabBarIcon: () => <Icon name="users" size={26} color="#333" />,
          }}
        />

        {/* MENU */}
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="menu" size={26} color="#333" />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
