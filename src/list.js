import React from 'react';
import Card from './card.js';
import './list.css';

function List(props){
    const listCards = props.cards.map((card,i)=> <Card id = {card.id} title = {card.title} content = {card.content} onDeleteItem={props.onDeleteItem}/>)
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {listCards}
                <button type = 'button' className='List-add-button'>+ Add Random Card</button>
            </div>
        </section>
    );
}

export default List;