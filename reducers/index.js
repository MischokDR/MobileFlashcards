import { GET_ALL_DECKS, GET_DECK, ADD_DECK, ADD_CARD } from "../actions";

const initState = {
  decks: [
    {
        title: "React",
        questions: [
          {
            question: "What is React Native?",
            answer: "It is a combination of HTML and JavaScript"
          }
        ]
      },
    {
      title: "Redux",
      questions: [
        {
          question: "What is Redux?",
          answer: "It is a library for managing state"
        }
      ]
    }
  ]
};

function decks(state = initState, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        decks: action.decks.map(deck => {
          return action.decks[deck];
        })
      };
    case GET_DECK:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default decks;
