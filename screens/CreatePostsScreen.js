import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import LocationIconComponent from "../assets/icons/LocationIconComponent";
import PhotoIconComponent from "../assets/icons/PhotoIconComponent";

const CreatePostsScreen = () => {
  const [inputs, setInputs] = useState({
    title: "",
    location: "",
  });

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  onOpenCamera = () => {
    console.log("Open camera");
  };

  onUploadPhoto = () => {};

  onPublishPhoto = () => {};

  const isButtonDisabled = !(inputs.title.trim() && inputs.location.trim());

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.photoBlock}>
          <TouchableOpacity onPress={onOpenCamera} style={styles.photoIcon}>
            <PhotoIconComponent />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onUploadPhoto}>
          <Text style={styles.upload}>Завантажте фото</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={inputs.title}
          onChangeText={(value) => handleInputChange("title", value)}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          keyboardType="default"
          autoCapitalize="none"
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.location]}
            value={inputs.location}
            onChangeText={(value) => handleInputChange("location", value)}
            placeholder="Місцевість..."
            placeholderTextColor="#BDBDBD"
            keyboardType="default"
            autoCapitalize="none"
          />
          <LocationIconComponent style={styles.icon} />
        </View>
        <Pressable
          onPress={onPublishPhoto}
          style={[
            styles.activeSubmitButton,
            isButtonDisabled && styles.submitButton,
          ]}>
          <Text
            style={[
              styles.activeSubmitButtonText,
              isButtonDisabled && styles.submitButtonText,
            ]}>
            {" "}
            Опубліковати
          </Text>
        </Pressable>
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

    marginHorizontal: 16,
    marginVertical: 32,
  },
  photoBlock: {
    height: 240,
    flexShrink: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  photoIcon: {
    padding: 18,
    backgroundColor: "white",
    borderRadius: 50,
    width: 60,
  },
  upload: {
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 32,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    padding: 16,
    paddingHorizontal: 0,
    borderColor: "#E8E8E8",
    color: "#212121",
    fontSize: 16,
    marginBottom: 16,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 32,
  },
  location: {
    paddingLeft: 28,
  },
  icon: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: [{ translateY: -20 }],
  },
  submitButtonText: {
    color: "#BDBDBD",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  activeSubmitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  activeSubmitButton: {
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    color: "#fff",
  },
});

export default CreatePostsScreen;
