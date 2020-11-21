import React from 'react';
import List from './list.js'
import './App.css';
import STORE from './store';

class App extends React.Component {
  state = STORE;

  omit(obj, keyToOmit) {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  handleDeleteItem = (id) => {
    // this.state.lists.map((list,i)=>{
    //   this.state.lists[i] = {id: i, header: list.header, cardIds: list.cardIds.filter(cardId => {return cardId !== id})}
    // })
    const newLists = this.state.lists
    newLists.map((list,i)=>{
      newLists[i] = {id: i, header: list.header, cardIds: list.cardIds.filter(cardId => {return cardId !== id})}
    })
    this.setState({lists:newLists})
    this.setState({allCards:this.omit(this.state.allCards,id)})
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleAddRandomCard = (listID) => {
    const newCard = this.newRandomCard();
    const id = newCard.id
    const newCards = this.state.allCards
    newCards[id]= newCard;
    this.setState({allCards:newCards})
    this.state.lists[listID].cardIds.push(id)
  }

  render (){
    return (
      <main className='App'>
        <header className = 'App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className = 'App-list'>
          {this.state.lists.map((list,i)=>{return <List 
            id = {i}
            header = {list.header} 
            cards = {list.cardIds.map(id => this.state.allCards[id])} 
            onDeleteItem={this.handleDeleteItem}
            onAddRandomCard = {this.handleAddRandomCard}
            />;})}
        </div>
      </main>
    );
  }
}

export default App;