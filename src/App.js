//import logo from './logo.svg';
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import Button from './components/Button'
import Form from './components/Form'
import CardList from './components/Card'

import './styles/App.css';

const App = () => {
   const [cards, setCards] = useState([])

   const addNewCard = cardInfo => {
     console.log("Both on submit handlers run")
     setCards(cards.concat(cardInfo))
   }


  
  return (
      <div>

        <Form onSubmit={addNewCard} />

        <CardList cards={cards} />

      </div>
  );
}

export default App;

