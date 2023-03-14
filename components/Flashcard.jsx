import { useState } from 'react';

function Flashcard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div
        className={`FlashCard Card ${
          isFlipped ? 'flipped FlashCard-bg-us' : 'FlashCard-bg-br'
        }`}
      >
        <div className="Card__inner" onClick={handleClick}>
          <div className="Card__front">
            <h3>Portuguese</h3>
            <h2>{props.front}</h2>
          </div>
          <div className="Card__back">
            <h3>English</h3>
            <h2>{props.back}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
