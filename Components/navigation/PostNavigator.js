import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../../screens/PostsScreen";
import MapScreen from "../../screens/MapScreen";
import CommentsScreen from "../../screens/CommentsScreen";
import BackButtonComponent from "../BackButtonComponent";

const Posts = createStackNavigator();

const PostNavigator = () => {
  const forwardBackButton = (navigation) => (
    <BackButtonComponent onPress={() => navigation.goBack()} />
  );

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
        options={{ headerShown: false }}
      />
      <Posts.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Мапа",
          headerLeft: () => forwardBackButton(navigation),
        })}
      />
      <Posts.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Коментарі",
          headerLeft: () => forwardBackButton(navigation),
        })}
      />
    </Posts.Navigator>
  );
};

export default PostNavigator;
