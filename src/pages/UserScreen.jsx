import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);      // data
  const [loading, setLoading] = useState(true); // loader

  // API Call
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);   // save data
      setLoading(false); // stop loader
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  // Run API call when screen opens
  useEffect(() => {
    fetchUsers();
  }, []);

  // Loader UI
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {users.map((item) => (
        <Text key={item.id} style={styles.userText}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
  },
  userText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
