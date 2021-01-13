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
  Footer,
  FooterTab,
  Button,
} from "native-base";
import { ScrolView, View, StyleSheet, TextInput } from "react-native";
// import { firebase } from "../components/firebase/config.js";

export default function SettingsTab() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
