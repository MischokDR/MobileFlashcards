import { AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = "FlashCards:decks";

export function setStartData() {
  const startData = {
    12312: {
      title: "React",
      cards: {
        80134: {
          question: "What is React?",
          answer: "It is a combination of HTML and JS"
        },
        12345: {
          question: "How does React pass data?",
          answer: "From parent to child"
        }
      }
    }
	};
	
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(startData))
    .then(() => startData)

  console.log(startData);
}

export function formatDecks (decks) {
  console.log(decks)

	return decks === null
		? this.setStartData()
    : decks
}
