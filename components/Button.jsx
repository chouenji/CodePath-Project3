import { useState } from 'react';
import Guess from './Guess';
import Flashcard from './Flashcard';

function Button(props) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);

  const handleNext = () => {
    setPrevious(current);
    const nextIndex = current + 1;
    if (nextIndex < props.flashcards.length) {
      setCurrent(nextIndex);
    }
  };

  const handlePrevious = () => {
    setCurrent(previous);
    const previousIndex = previous - 1;
    if (previousIndex >= 0) {
      setPrevious(previousIndex);
    }
  };

  const handleShuffle = () => {
    props.flashcards.sort(() => Math.random() - 0.5);
    setCurrent(0);
    setPrevious(0);
  };

  return (
    <div>
      <div>
        <Flashcard
          front={current >= 0 ? props.flashcards[current].front : ''}
          back={current >= 0 ? props.flashcards[current].back : ''}
          mastered={current >= 0 ? props.flashcards[current].mastered : ''}
        />
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={handlePrevious}
            className="btn"
            disabled={previous === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="btn"
            disabled={current === props.flashcards.length - 1}
          >
            Next
          </button>
          <button onClick={handleShuffle} className="btn">
            Shuffle Cards
          </button>
        </div>
        <Guess answer={props.flashcards[current].back} />
      </div>
    </div>
  );
}

export default Button;
