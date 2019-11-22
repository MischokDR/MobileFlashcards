import DECK_STORAGE_KEY, { formatDecks } from "./_deck";
import { AsyncStorage } from "react-native";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck(title) {

}

export function saveDeckTitle(title) {
  //TODO: check if we already have a deck with the same title?
    var deck = {
        title: title,
        questions: []
    }
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
}

export function addCardToDeck(title, question) {

}

export function removeDeck(deck) {

}