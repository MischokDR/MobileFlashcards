import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import  Constants  from 'expo-constants';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DeckList from './components/DeckList';
import reducer from './reducers';
import NewDeck from './components/NewDeck';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

function FlashStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor}{...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: () => <Ionicons name='md-add-circle' size={30} color='white' />
    }
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => <Ionicons name='md-filing' size={30} color='white'/>
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: 'black',
      borderTopWidth: 1.5,
      borderTopColor: 'white',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'Deck Detail',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render(){
    return(
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <FlashStatusBar backgroundColor={'black'} barStyle="light-content"/>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

