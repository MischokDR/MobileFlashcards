import * as api from '../utils/api';

export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const GET_DECK = "GET_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK"

export function getAllDecks() {
  return async function(dispatch) {  
    const decks = JSON.parse(await api.getDecks());
      dispatch({
        type: GET_ALL_DECKS,
        decks
      });
  }
}

export function getDeck(title) {
  return {
    type: GET_DECK,
    title
  }
}

export function addDeck(title) {
  return async function(dispatch) {
    await api.saveDeckTitle(title)
    .then(title => dispatch({
      type: ADD_DECK,
      title
    }))
  }
}

export function addCard(title, card) {
  return async (dispatch) => {
    await api.addCardToDeck(title, card)
    .then(decks => 
      dispatch({
        type: ADD_CARD,
        decks,
        title
      })
    )
  }
}

export function deleteDeck(title) {
  return async (dispatch) => {
    await api.removeDeck(title)
    .then((decks) => dispatch({
      type: DELETE_DECK,
      decks
    }))
  }
}
