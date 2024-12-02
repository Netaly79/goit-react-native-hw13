import React, { useEffect } from "react";
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

const PostsScreen = ({ navigation, route }) => {
  const photo_block = require("../assets/avatar.jpeg");
  const posts = travelCards;

  const navigateToComments = (item) => {
    navigation.navigate("Comments", { item, source: "AllPosts" });
  };
  const navigateToMap = (item) => {
    navigation.navigate("Map", { item, source: "AllPosts" });
  };

  useEffect(() => {
    if (route?.params?.user) {
      console.log({ user: route.params.user });
    }
    if (route?.params?.post) {
      setPosts((prev) => {
        return [...prev, route?.params?.post];
      });
    }
  }, [route?.params?.post, route?.params?.user]);

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
          renderItem={({ item }) => (
            <PostCard
              item={item}
              navigateToComments={() => navigateToComments(item, "Posts")}
              navigateToMap={() => navigateToMap(item)}
            />
          )}
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
