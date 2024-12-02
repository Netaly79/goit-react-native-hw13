import React from "react";
import {
  Image,
  ImageBackground,
  FlatList,
  StyleSheet,
  Text,

  View,
  TouchableOpacity,
} from "react-native";
import { travelCards } from "../mockData.js";
import RemovePhotoComponent from "../assets/icons/RemovePhotoIconComponent";
import LogOutComponent from "../assets/icons/LogOutIconComponent";
import PostCard from "../Components/PostCard.js";

const image = require("../assets/photo_bg.png");
const photo_block = require("../assets/avatar.jpeg");
const posts = travelCards;

const ProfileScreen = ({ navigation, setLogged }) => {
  const handleLogOut = () => {
    setLogged(false);
  };

  const navigateToComments = (item) => {
    navigation.navigate("Posts", {
      screen: "Comments",
      params: { item, source: "Profile" },
    });
  };
  const navigateToMap = (item) => {
    navigation.navigate("Posts", {
      screen: "Map",
      params: { item, source: "Profile" },
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.canva}>
          <View style={styles.avatarBox}>
            <Image style={styles.avatar} source={photo_block} />
            <RemovePhotoComponent style={styles.addPhoto} />
          </View>
          <TouchableOpacity onPress={handleLogOut} style={styles.logOut}>
            <LogOutComponent />
          </TouchableOpacity>
          <Text style={styles.title}>Natali Romanova</Text>
          <FlatList
            contentContainerStyle={{ paddingBottom: 16 }}
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PostCard
                item={item}
                isProfileView={true}
                navigateToComments={() => navigateToComments(item)}
                navigateToMap={() => navigateToMap(item, "Profile")}
              />
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  canva: {
    backgroundColor: "rgb(255, 255, 255)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 32,
    height: "70%",
  },
  avatarBox: {
    width: 132,
    height: 120,
    zIndex: 2,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -46 }],
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhoto: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    paddingTop: 62,
    paddingBottom: 33,
  },
  logOut: {
    marginLeft: "auto",
  },
  list: {
    flex: 1,
  },
});

export default ProfileScreen;
