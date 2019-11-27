import { GET_ALL_DECKS, GET_DECK, ADD_DECK, ADD_CARD, DELETE_DECK } from "../actions";

// const initState = {
//   decks: [
//     {
//         title: "React",
//         questions: [
//           {
//             question: "What is React Native?",
//             answer: "It is a combination of HTML and JavaScript"
//           }
//         ]
//       },
//     {
//       title: "Redux",
//       questions: [
//         {
//           question: "What is Redux?",
//           answer: "It is a library for managing state"
//         },
//         {
//           question: "What is the advantage of Redux?",
//           answer: "A single source of truth"
//         }
//       ]
//     }
//   ],
//   deck: {}
// };

const initState = {
  decks: [],
  deck: {}
}

function allDecks(state = initState, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
    console.log('GET ALL DECKS', state.decks, action.decks);
      if(!action.decks){
        return state
      }
      return {
        decks: action.decks,
        deck: {}
      };
    case GET_DECK:
      let oneDeck = state.decks.filter(deck => deck.title === action.title)
      return {
        decks: state.decks,
        deck: oneDeck[0],
      }
    case ADD_DECK:
      if(!state.decks.length) {
        return {
          decks: [{
            title: action.title,
            questions: []
          }],
          deck: {}
        }
      }
      let newDecks = {...state}
      let addedDeck = {title: action.title, questions: []}
      newDecks.decks.push(addedDeck)
      console.log(newDecks, 'NewDECK')
      return JSON.parse(JSON.stringify(newDecks))
    case ADD_CARD:
      let deck = action.decks.filter(deck => deck.title === action.title)
      let newState = { decks: action.decks, deck: deck[0] }
      return JSON.parse(JSON.stringify(newState))
      // let temp = {...state};
      // let deck  = temp.decks.filter(x => x.title === action.title);
      // if (deck.length) {
      //   deck[0].questions.push(action.card);
      //   return JSON.parse(JSON.stringify(temp));
      // }
      // return state;
    case DELETE_DECK:
      return {
        decks: action.decks,
        deck: {}
      }
    default:
      return state;
  }
}

export default allDecks;
