import './App.css';
import Flashcard from '../components/Flashcard';
import Button from '../components/Button';
import { useEffect, useState } from 'react';

function App() {
  const [flashcards] = useState([
    {
      front: 'Olá',
      back: 'Hello',
    },
    {
      front: 'Tchau',
      back: 'Goodbye',
    },
    {
      front: 'Obrigado',
      back: 'Thank you',
    },
    {
      front: 'Desculpe',
      back: 'Excuse me',
    },
    {
      front: 'Por favor',
      back: 'Please',
    },
    {
      front: 'Bom dia',
      back: 'Good morning',
    },
    {
      front: 'Boa tarde',
      back: 'Good afternoon',
    },
    {
      front: 'Boa noite',
      back: 'Good night',
    },
    {
      front: 'Como você está?',
      back: 'How are you?',
    },
    {
      front: 'Eu estou bem',
      back: 'I am fine',
    },
  ]);

  return (
    <div className="App">
      <h1>The Ultimate Way to Learn Portuguese (Brazil)!</h1>
      <p>Learn a new language with flashcards!</p>
      <p>Number of cards: {flashcards.length}</p>
      <Button flashcards={flashcards} />
    </div>
  );
}

export default App;
