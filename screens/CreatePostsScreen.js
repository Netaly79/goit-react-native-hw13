import React, { useState, useEffect } from "react";
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
import uuid from "react-native-uuid";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import LocationIconComponent from "../assets/icons/LocationIconComponent";
import PhotoIconComponent from "../assets/icons/PhotoIconComponent";
import BasketIconComponent from "../assets/icons/BasketIconComponent";
import * as Location from "expo-location";

const CreatePostsScreen = (props) => {
  
  const [inputs, setInputs] = useState({
    title: "",
    location: "",
  });

  const [photoUrl, setPhotoUrl] = useState("");
  const [geoLocation, setGeoLocation] = useState(null);

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleTakePicture = async () => {
    if (camera.current) {
      const picture = await camera.current.takePictureAsync();
      if (picture?.uri) {
        setPhotoUrl(picture.uri);
        await MediaLibrary.createAssetAsync(picture.uri);
      }
    }
  };

  onUploadPhoto = () => {};

  onPublishPhoto = () => {
    if (isButtonDisabled) {
      alert("Please fill in all fields.");
      return;
    }
    const post = {
      id: uuid.v4(),
      photo: photoUrl,
      title: inputs.title,
      comments: [],
      likes: 0,
      location: inputs.location,
      geoLocation,
    };
    props.navigation.navigate("Posts", { post });
    setInputs({"title": "", "location": ""});
    setPhotoUrl("");
  };

  onClean = () => {
    setInputs({"title": "", "location": ""});
    setPhotoUrl("");
  }

  const isButtonDisabled = !(inputs.title.trim() && inputs.location.trim());

  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.wrapperVertical}>
        <View style={styles.photoBlock}>
          <CameraView style={styles.camera} facing={facing}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleTakePicture} style={styles.photoIcon}>
                <PhotoIconComponent />
              </TouchableOpacity>
            </View>
            </CameraView>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
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
            Опубліковати
          </Text>
        </Pressable>
        </View>
        <Pressable
          onPress={onClean}
          style={[
            styles.basketButton
          ]}>
          <BasketIconComponent />
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
    flexDirection: "column",
    justifyContent: "space-between"
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
    position: "relative",
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
  button: {
    right: 10,
    bottom: 10,
    position: "absolute",
  },
  basketButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  }
});

export default CreatePostsScreen;
