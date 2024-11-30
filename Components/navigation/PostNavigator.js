import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import PostsScreen from "../../screens/PostsScreen";
import MapScreen from "../../screens/MapScreen";
import CommentsScreen from "../../screens/CommentsScreen";
import BackButtonComponent from "../BackButtonComponent";
import LogOutComponent from "../../assets/icons/LogOutIconComponent";

const Posts = createStackNavigator();
const PostNavigator = ({ navigation, setLogged }) => {
  console.log(setLogged);
  const logOut = () => (
    <TouchableOpacity onPress={handleLogOut}>
      <LogOutComponent />
    </TouchableOpacity>
  );
  const handleLogOut = () => {
    setLogged(false);
  };

  return (
    <Posts.Navigator
      initialRouteName="AllPosts"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
      }}>
      <Posts.Screen
        name="AllPosts"
        component={PostsScreen}
        options={{
          headerShown: false,
          title: "Публікації",
          headerRight: () => logOut(setLogged),
        }}
      />
      <Posts.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Мапа",
          headerLeft: () => (
            <BackButtonComponent onPress={() => navigation.goBack()} />
          ),
        })}
      />
      <Posts.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Коментарі",
          headerLeft: () => (
            <BackButtonComponent onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Posts.Navigator>
  );
};

export default PostNavigator;
