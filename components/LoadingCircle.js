import React from "react";
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Text, Easing } from "react-native";
import { WHITE, PURPLE, LIGHT_BLUE, BLUE, } from "../styles/shared";

export default class LoadingCircle extends React.Component {
  state = {
    spin1: new Animated.Value(0),
    spin2: new Animated.Value(0),
    spin3: new Animated.Value(0),
  }
  circle1Spin = Animated.timing(
    this.spin1,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }
  )
  circle2Spin = Animated.timing(
    this.spin2,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.back(),
      useNativeDriver: true,
    }
  )
  circle3Spin = Animated.timing(
    this.spin2,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.elastic(),
      useNativeDriver: true,
    }
  )
  componentDidMount() {
    Animated.parallel([
      this.circle1Spin,
      this.circle2Spin,
      this.circle3Spin,
    ]).start();
  }
  render() {
    let interpolate1 = this.state.spin1.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    let interpolate2 = this.state.spin2.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    let interpolate3 = this.state.spin3.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle1, {transform: [{rotate: interpolate1}]}]}>
          <Animated.View style={[styles.circle2, {transform: [{rotate: interpolate2}]}]}>
            <Animated.View style={[styles.circle3, {transform: [{rotate: interpolate3}]}]}>
              <Text style={styles.text}>Loading</Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

const dimen1 = 192;
const dimen2 = 160;
const dimen3 = 128;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LIGHT_BLUE,
  },
  circle1: {
    height: dimen1,
    width: dimen1,
    borderStyle: "solid",
    borderWidth: 7,
    borderRadius: dimen1/2,
    borderTopColor: BLUE,
    borderRightColor: LIGHT_BLUE,
    borderBottomColor: BLUE,
    borderLeftColor: LIGHT_BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
  circle2: {
    height: dimen2,
    width: dimen2,
    borderStyle: "solid",
    borderWidth: 6,
    borderRadius: dimen2/2,
    borderTopColor: LIGHT_BLUE,
    borderRightColor: LIGHT_BLUE,
    borderBottomColor: LIGHT_BLUE,
    borderLeftColor: BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
  circle3: {
    height: dimen3,
    width: dimen3,
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: dimen3/2,
    borderTopColor: LIGHT_BLUE,
    borderRightColor: BLUE,
    borderBottomColor: LIGHT_BLUE,
    borderLeftColor: LIGHT_BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: PURPLE,
    fontSize: 25,
  },
});
