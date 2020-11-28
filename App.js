import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/in';

export default class App extends React.Component{
  render(){
    return(
      <createAppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FaceBookScreen },
  Instagram: { screen: InstagramScreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
