import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Deck from "./Deck";
import DeckInfo from "./DeckInfo";
import EditCards from "./EditCards";
import EditCardModal from "./EditCardModal";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

class DeckDetail extends React.Component {
  static navigationOptions = ({ screenProps }) => {
    return {
      title: screenProps.activeDeck,
    };
  }
  state = {
    isModalVisible: false,
  };
  startQuiz = () => {
    if (this.props.deck.questions.length === 0) {
      alert("Deck has no cards. Add a card first.");
      return;
    }
    this.props.navigation.navigate("Quiz");
  }
  editDeck = () => {
    this.props.navigation.navigate("EditDeck");
  }
  addCard = () => {
    this.props.navigation.navigate("AddCard");
  }
  toggleModal = (index) => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }
  openModal = () => {
    this.setState(() => ({
      isModalVisible: true,
    }));
  }
  closeModal = () => {
    this.setState(() => ({
      isModalVisible: false,
    }));
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: "center"}}>
        <DeckInfo title={this.props.deck ? this.props.deck.title : ""} />
        <ButtonPrimary onPress={this.startQuiz}>Start Quiz</ButtonPrimary>
        <ButtonSecondary onPress={this.editDeck}>Edit Deck</ButtonSecondary>
        <EditCards toggleModal={this.toggleModal} />
        <EditCardModal toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible} closeModal={this.closeModal}/>
      </View>
    );
  }
}

function mapStateToProps({ decks, activeDeck }, { navigation }) {
  return {
    deck: decks[activeDeck],
  };
}

export default connect(mapStateToProps)(DeckDetail);
