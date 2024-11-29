import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CommentIconComponent from "../assets/icons/CommentIconComponent";
import LocationIconComponent from "../assets/icons/LocationIconComponent";

const PostCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.photo }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.desc}>
      <View style={{flexDirection: 'row'}}>
        <CommentIconComponent />
        <Text style={styles.comments}>
          {item.comments.length}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <LocationIconComponent />
      <Text style={styles.location}>{item.location}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 24,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8
  },
  title: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 500,
    margin: 8,
  },
  location: {
    color: '#212121',
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationSkipInk: 'none',
    textDecorationThickness: 'auto',
    textUnderlineOffset: 'auto',
    textUnderlinePosition: 'from-font',
    marginHorizontal: 8,
  },
  likes: {
    fontSize: 14,
    color: "#888",
    marginHorizontal: 8,
    marginBottom: 4,
  },
  comments: {
    color: '#BDBDBD',
    fontFamily: 'Roboto',
    fontSize: 16,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  desc: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default PostCard