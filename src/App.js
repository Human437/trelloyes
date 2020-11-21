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

  // handleDeleteItem(id){
  //   console.log('handle delete item called', { id })
  //   // const stateObject = this.state.allCards;
  //   // this.omit(stateObject,id)
  //   console.log(this.state.allCards)
  //   // this.setState()
  // }
  // // handleCheckItem(item){
  // //   console.log('handle check item called', { item })
  // // }

  // idMatch(id){
  //   return
  // }

  handleDeleteItem = (id) => {
    console.log('handle delete item called', { id })
    // const newList = this.state.lists.cardIds.filter(cardId => cardId !== id)
    // this.setState({
    //   cardIds: newList
    // })
    this.state.lists.map((list,i)=>{
      // list.cardIds.filter(cardId => cardId !== id)
      this.state.lists[i] = {id: i, header: list.header, cardIds: list.cardIds.filter(cardId => {return cardId !== id})}
    })
    this.setState({allCards:this.omit(this.state.allCards,id)})
    console.log(this.omit(this.state.allCards,id))
  }

  handleAddRandomCard(listID){
    console.log('handle random card called')
  }

  render (){
    console.log(this.state.lists)
    return (
      <main className='App'>
        <header className = 'App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className = 'App-list'>
          {this.state.lists.map((list)=>{return <List 
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