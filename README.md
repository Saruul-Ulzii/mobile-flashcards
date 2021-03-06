# Mobile flashcards
A React Native App for iOS built using expo-cli, SQLite, react navigation, and redux.

## To Install and Run App

#### Using Yarn
```
git clone https://github.com/andrewShillito/mobile-flashcards
cd mobile-flashcards
yarn
yarn start
```

#### Using npm
```
git clone https://github.com/andrewShillito/mobile-flashcards
cd mobile-flashcards
npm install
npm start
```
Will start an expo server in a new browser tab.  You can then connect to expo via iPhone, Android, or emulator to run the app.

## Features

1. Access your decks on the home screen
    - *sort by category or view all*
2. Create, update, view, and destroy decks and flashcards within those decks
3. Quiz yourself with your flashcard decks
4. View a short score report at the end of your quiz

## Tab Navigator Routes

1. Home - view a list of your flashcard decks.
    - *sort by category or view all*
    - *Touch decks to open a side bar with buttons for viewing the deck, editing the deck,
  and starting a quiz*
2. New - create new decks
    - *select an existing category or type in a new category name*

## Stack Navigator Routes

1. DeckDetail - View options and scroll through the cards of selected deck.
    - *Touch a card to edit its content*
2. Quiz - Quiz yourself on your deck choosing correct or incorrect to track your score. Displays a score report when quiz is completed.
3. EditDeck - Change deck title, add cards, or delete the deck.

*Coming soon - more in-depth score reports, Home Deck swipe handling, extended category functionality*
