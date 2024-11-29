import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import { travelCards } from "../mockData.js";
import PostCard from "../Components/PostCard.js";

const PostsScreen = () => {
  const photo_block = require("../assets/avatar.jpeg");
  const posts = travelCards;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={photo_block} />
          <View style={styles.user}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  user: {
    marginLeft: 16,
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "bold",
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
  },
  list: {
    flex: 1,
  },
  navigator: {
    flex: 0.1,
    marginBottom: 34
  },
});

export default PostsScreen;
