import { useState } from 'react';

function Guess(props) {
  const [guess, setGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleInput = (e) => {
    const guessValue = e.target.value.toLowerCase();
    setGuess(guessValue);
  };

  const handleAnswer = () => {
    const correctAnswer = props.answer.toLowerCase();
    const guessValue = guess.toLowerCase();

    let numCorrectInOrder = 0;
    let i = 0;
    let j = 0;
    while (i < guessValue.length && j < correctAnswer.length) {
      if (guessValue[i] === correctAnswer[j]) {
        numCorrectInOrder++;
        if (numCorrectInOrder >= Math.ceil(correctAnswer.length / 2) + 2) {
          setIsCorrect(true);
          setIsSubmitted(true);
          setCounter(counter + 1);
          return;
        }
        j++;
      } else {
        setCounter(0);
      }
      i++;
    }

    const isExactMatch = guessValue === correctAnswer;
    setIsCorrect(isExactMatch);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h2 style={{ display: 'inline-block', position: 'relative', top: '3px' }}>
        Guess the answer here: &nbsp;
      </h2>
      <input
        style={{
          padding: '10px',
          fontSize: '1.5em',
          borderColor: isSubmitted ? (isCorrect ? 'green' : 'red') : 'white',
        }}
        type="text"
        value={guess}
        onChange={handleInput}
      />
      <button style={{ marginLeft: '8px' }} onClick={handleAnswer}>
        Submit Guess
      </button>
      <h2>Score: {counter}</h2>
    </div>
  );
}

export default Guess;
