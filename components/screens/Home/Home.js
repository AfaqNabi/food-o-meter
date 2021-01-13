import React, { useState, Component } from "react";
import AppLoading from "expo-app-loading";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Item,
  Icon,
  Input,
} from "native-base";
import {
  firebase,
  db,
} from "/Users/afaqnabi/Desktop/mobile_app/food-o-meter/components/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsTab from "../SettingsTab/SettingsTab";
import AddTab from "../AddTab/AddTab";

export default function Home() {
  // const doc = db.collection("recipe");
  function HomeScreen() {
    return (
      <Container>
        <Header searchBar>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Find yummy foods" />
          </Item>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>Recipe Name</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Breif description of recipe</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>comment</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  const Tab = createBottomTabNavigator();
  const onPressProfile = () => {
    console.log(firebase().collection("Users").get());
  };
  return (
    <Container>
      <Tab.Navigator>
        <Tab.Screen name="Add" component={AddTab} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsTab} />
      </Tab.Navigator>
    </Container>
  );
}
