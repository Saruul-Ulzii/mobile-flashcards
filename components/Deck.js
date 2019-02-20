import React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import DeckHeader from "./DeckHeader";
import styles from "../styles/deck";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import InfoIcon from "./InfoIcon";
import QuizIcon from "./QuizIcon";
import EditIcon from "./EditIcon";

class Deck extends React.Component {
  state = {
    marginRight: new Animated.Value(0),
    buttonWidth: new Animated.Value(0),
    pannedLeft: false,
  }

  handleTouch = () => {
    if (this.state.pannedLeft) {
      this.closeButtons();
    } else {
      this.openButtons();
    }
  }

  openButtons = () => {
    Animated.parallel([
      Animated.timing(this.state.marginRight, {
        toValue: 20,
        duration: 300,
      }),
      Animated.timing(this.state.buttonWidth, {
        toValue: 40,
        duration: 300,
      })
    ]).start(() => this.setState((prevState) => ({ pannedLeft: !prevState.pannedLeft })));
  }

  closeButtons = () => {
    Animated.parallel([
      Animated.timing(this.state.marginRight, {
        toValue: 0,
        duration: 300,
      }),
      Animated.timing(this.state.buttonWidth, {
        toValue: 0,
        duration: 300,
      })
    ]).start(() => this.setState((prevState) => ({ pannedLeft: !prevState.pannedLeft })));
  }

  handleInfoPress = () => {
    this.closeButtons();
    this.props.goToDeckDetail(this.props.deck.title);
  }

  handleQuizPress = () => {
    if (this.props.deck.questions.length) {
      this.closeButtons();
      this.props.goToQuiz(this.props.deck.title);
    }
    else {
      alert("No questions in deck!");
    }
  }

  handleEditPress = () => {
    this.closeButtons();
    this.props.goToEdit(this.props.deck.title);
  }

  render() {
    const { deck } = this.props;
    const { marginRight, buttonWidth } = this.state;

    return (
      <Animated.View style={styles.container}>
        <TouchableOpacity style={styles.deck} onPress={this.handleTouch}>
          <DeckHeader>{deck.title}</DeckHeader>
          <Text style={styles.text}>{`${deck.questions.length} card${deck.questions.length>1 || deck.questions.length === 0 ? "s" : ""}`}</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.buttonContainer, {width: buttonWidth, marginRight: marginRight}]}>
          <InfoIcon onPress={this.handleInfoPress}/>
          <QuizIcon onPress={this.handleQuizPress} active={deck.questions.length > 0} />
          <EditIcon onPress={this.handleEditPress}/>
        </Animated.View>
      </Animated.View>
    );
  }
}

export default Deck;
