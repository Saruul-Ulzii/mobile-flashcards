import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CustomStatusBar from "./components/customStatusBar";
import Home from "./components/Home";

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <CustomStatusBar backgroundColor="purple" barStyle="light-content" />
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
