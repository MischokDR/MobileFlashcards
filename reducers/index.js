import { GET_ALL_DECKS, GET_DECK, ADD_DECK, ADD_CARD } from "../actions";

const initState = {
  decks: [],
  deck: {
    title: '',
    questions: []
  }
}

function decks(state = initState, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        decks: Object.keys(action.decks).map( key => {
          return action.decks[key]
        })
      }
    case GET_DECK:
      return {
        ...state,
        
      }
    default:
      return state
  }
}

export default decks;