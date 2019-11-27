import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = 'FlashCards:decks';


export async function getDecks() {
  return await AsyncStorage.getItem(DECK_STORAGE_KEY);
}

// export function getDeck(title) {
//   let decks = AsyncStorage.getItem(DECK_STORAGE_KEY)
//   let deck
//   Object.keys(decks).map(key => 
//     decks[key].title === title
//     ? deck = decks[key]
//     : null
//   )
//   return deck
// }

export async function saveDeckTitle(title) {
  var titleExists = false;
  var titleCount = 0;
  const data = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY));
  console.log(data, '------------before------------')
  if(!data) {
    const decks = [{
      title: title,
      questions:[]
    }]
    console.log(decks, '---------------')
    await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    return title
  }else{
    Object.keys(data).forEach(key => {
      if(data[key].title === title){
        titleExists = true
      }
      if(data[key].title.includes(title)){
        titleCount++
      }
    })
    if(titleExists){
      await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([...data, {
        title: title + " " + titleCount,
        questions: []
      }]))
      return title + " " + titleCount
    }
    await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([...data, {
      title: title,
      questions: []
    }]))
    return title
  }
}

export async function addCardToDeck(title, question) {
  return await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(decksString => {
      let decks = JSON.parse(decksString);
      
      Object.keys(decks).forEach( key => {
        if(decks[key].title === title)
          decks[key].questions = [...decks[key].questions, question]
      });
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
      return decks
    })
}

export async function removeDeck(title) {
  let decks = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY))
  let newDecks = decks.filter(deck => deck.title !== title)
  await AsyncStorage.removeItem(DECK_STORAGE_KEY)
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newDecks))
  return newDecks
}

export async function removeAllDecks() {
  await AsyncStorage.clear()
}