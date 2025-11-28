import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import { View, Text } from "react-native";

// Import your real HomeScreen UI
import HomeScreen from '../pages/HomeScreen';
import UsersScreen from '../pages/UserScreen';

const Tab = createBottomTabNavigator();

// --- Other Screens ---
function ChatScreen() {
  return <View><Text style={{ fontSize: 30 }}>Chat Screen</Text></View>;
}

function NotificationScreen() {
  return <View><Text style={{ fontSize: 30 }}>Notifications</Text></View>;
}

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
          name="Chats"
          component={ChatScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Icon name="message-square" size={26} color="#333" />
                <View style={{
                  position: "absolute",
                  top: -3,
                  right: -10,
                  backgroundColor: "red",
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Text style={{ color: "#fff", fontSize: 10 }}>N</Text>
                </View>
              </View>
            ),
          }}
        />

        {/* NOTIFICATIONS */}
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Icon name="bell" size={26} color="#333" />
                <View style={{
                  position: "absolute",
                  top: -3,
                  right: -10,
                  backgroundColor: "red",
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Text style={{ color: "#fff", fontSize: 10 }}>9</Text>
                </View>
              </View>
            ),
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
