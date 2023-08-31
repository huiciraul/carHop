import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar} from "@rneui/themed";
import { getAuth, updateProfile } from "firebase/auth";
import { styles } from "./InfoUser.styles";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

export function InfoUser( props ) {
  const { setLoading, setLoadingText } = props;
  const {uid, photoURL, displayName, email} = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL)

const changeAvatar = async() =>{
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4,3],
  });
if (!result.canceled) uploadImage(result.uri);
};

const uploadImage = async(uri) =>{
  setLoadingText("Actualizando avatar")
  setLoading(true);
  
  const response = await fetch(uri);
  const blob = await response.blob();

  const storage = getStorage();
  const storageRef = ref(storage, `avatar/${uid}`);

  uploadBytes(storageRef, blob).then((snapshot) => {
    updatePhotoUrl(snapshot.metadata.fullPath);
  });
};

const updatePhotoUrl = async(imagePath) => {
  const storage = getStorage();
  const imageRef = ref(storage, imagePath);

  const imageUrl = await getDownloadURL(imageRef);
  console.log(imageUrl);
  const auth = getAuth();
  updateProfile(auth.currentUser, {photoURL: imageUrl});

  setAvatar(imageUrl);

  setLoading(false);
  
};

 return (
      <View style={styles.content}>
      <Avatar
        size={"large"}
        rounded
        //icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >

        <Avatar.Accessory size={24} onPress={changeAvatar}/>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text style={styles.displayName}>{email}</Text>
      </View>
    </View>
  )
}