import { useState } from 'react';
import Flashcard from './Flashcard';

function Button(props) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleNext = () => {
    setPrevious(current);
    let next = Math.floor(Math.random() * props.flashcards.length);
    while (next === current) {
      next = Math.floor(Math.random() * props.flashcards.length);
    }
    setCurrent(next);
  };

  const handlePrevious = () => {
    setCurrent(previous);
    setPrevious(-1);
  };

  return (
    <div>
      <div>
        <Flashcard
          front={current >= 0 ? props.flashcards[current].front : ''}
          back={current >= 0 ? props.flashcards[current].back : ''}
        />
        <button
          onClick={handlePrevious}
          className="btn"
          disabled={previous < 0}
        >
          Previous
        </button>
        <button onClick={handleNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
}

export default Button;
