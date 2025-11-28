import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function HomeScreen() {

  const stories = [
    { id: 1, name: "You", add: true },
    { id: 2, name: "Sally", img: "https://randomuser.me/api/portraits/women/44.jpg", border: "#4A90E2" },
    { id: 3, name: "Jason", img: "https://randomuser.me/api/portraits/men/32.jpg", border: "#FF79C6" },
    { id: 4, name: "Jena", img: "https://randomuser.me/api/portraits/women/65.jpg", border: "#FFB86C" },
    { id: 5, name: "Michael", img: "https://randomuser.me/api/portraits/men/30.jpg", border: "#8BE9FD" },
    { id: 6, name: "Liar", img: "https://randomuser.me/api/portraits/men/80.jpg", border: "#333" },
  ];

  return (
    <View style={{ padding: 20 }}>

      {/* Header */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 40,
      }}>
        
        {/* Left Side */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 22.5,
              backgroundColor: "#fbdada",
              overflow: "hidden",
              marginRight: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/300" }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <Text style={{ fontSize: 20, fontWeight: "700", color: "#333" }}>
            Shap Chart
          </Text>
        </View>

        {/* Search Icon */}
        <Icon name="search" size={24} color="#333" />
      </View>



      {/* 🔵 Story Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        {stories.map((item) => (
          <View key={item.id} style={{ alignItems: "center", marginRight: 20 }}>

            {/* Add Button Story */}
            {item.add ? (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: "#dcdcdc",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="plus" size={26} color="#4a90e2" />
              </View>
            ) : (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 3,
                  borderColor: item.border,
                  padding: 2,
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 30,
                  }}
                />
              </View>
            )}

            <Text style={{ marginTop: 6, fontSize: 12 }}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>



      {/* Bottom content */}
      <Text style={{ fontSize: 30, marginTop: 30 }}>Home Screen</Text>

    </View>
  );
}
