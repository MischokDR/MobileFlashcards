import * as api from '../utils/api';

export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const GET_DECK = "GET_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function getAllDecks(decks) {
  api.getDecks()

  return {
    type: GET_ALL_DECKS,
    decks
  }
}

export function getDeck(deckId) {  
  return {
    type: GET_DECK,
    deckId
  };
}

export function addDeck(title) {
  api.saveDeckTitle(title)

  return {
    type: ADD_DECK,
    title
  };
}

export function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}
