import './App.css';
import Button from '../components/Button';
import { useState } from 'react';

function App() {
  const [flashcards] = useState([
    {
      front: 'Olá',
      back: 'Hello',
      mastered: false,
    },
    {
      front: 'Tchau',
      back: 'Goodbye',
      mastered: false,
    },
    {
      front: 'Obrigado',
      back: 'Thank you',
      mastered: false,
    },
    {
      front: 'Desculpe',
      back: 'Excuse me',
      mastered: false,
    },
    {
      front: 'Por favor',
      back: 'Please',
      mastered: false,
    },
    {
      front: 'Bom dia',
      back: 'Good morning',
      mastered: false,
    },
    {
      front: 'Boa tarde',
      back: 'Good afternoon',
      mastered: false,
    },
    {
      front: 'Boa noite',
      back: 'Good night',
      mastered: false,
    },
    {
      front: 'Como você está?',
      back: 'How are you?',
      mastered: false,
    },
    {
      front: 'Eu estou bem',
      back: 'I am fine',
      mastered: false,
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
