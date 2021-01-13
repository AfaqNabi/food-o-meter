import React from "react";
import AppLoading from "expo-app-loading";
import {
  Container,
  Header,
  Label,
  Title,
  Form,
  Item,
  Input,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
// import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "/Users/afaqnabi/Desktop/mobile_app/food-o-meter/components/firebase/config.js";
import firestore from "@react-native-firebase/firestore";
import Home from "../Home/Home";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email: "",
      password: "",
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("please enter atleast 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.props.navigation.navigate("Home"));
    } catch (error) {
      console.log(error.toString());
    }
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>

            <Button
              style={{ marginTop: 10 }}
              full
              success
              onPress={() =>
                this.loginUser(this.state.email, this.state.password)
              }
            >
              <Text> Login</Text>
            </Button>

            <Button
              style={{ marginTop: 10 }}
              full
              primary
              onPress={() =>
                this.signUpUser(this.state.email, this.state.password)
              }
            >
              <Text style={{ color: "white" }}> Sign up</Text>
            </Button>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>food-o-meter 2021™</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
