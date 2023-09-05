import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "./MessageStyles";

const Messages_data = [
  {
    id: "1",
    userName: "Raul Huici",
    //userImg: require("../../../../assets/img/carpool.png"),
    messageTime: "4 mins ago",
    messageText: "Hey there, I will be at pickup point in 3 minutes.",
  },
  {
    id: "2",
    userName: "Leo Messi",
    //userImg: require("../../../../assets/img/carpool.png"),
    messageTime: "2 hours ago",
    messageText: "I will pick you up at 8.30am sharp",
  },
  {
    id: "3",
    userName: "Marcos Galperín",
    //userImg: require("../../../../assets/img/carpool.png"),
    messageTime: "1 hours ago",
    messageText: "I will be late by five minutes",
  },
  {
    id: "4",
    userName: "Sol Perez",
    //userImg: require("../../../../assets/img/carpool.png"),
    messageTime: "1 day ago",
    messageText: "It was nice sharing ride with you",
  },
  {
    id: "5",
    userName: "Cristina Greiner",
    //userImg: require("../../../../assets/img/carpool.png"),
    messageTime: "2 days ago",
    messageText: "Hope to see you again!",
  },
];
export function MensajesScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <FlatList
        data={Messages_data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate(screen.mensajeria.chat, {
                userName: item.userName,
              })
            }
          >
            <UserInfo>
              <UserImgWrapper>
                {/* <UserImg source={item.userImg} /> */}
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
