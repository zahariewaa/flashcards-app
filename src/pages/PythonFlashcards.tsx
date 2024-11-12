import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { FlashCard } from '../components/FlashCard';
import { flashcards } from '../data/flashcards';

const PythonFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Code className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Python Flashcards</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Master Python programming concepts with interactive flashcards.
          Test your knowledge and learn at your own pace.
        </p>
      </div>

      <div className="flex justify-center">
        <FlashCard
          card={flashcards[currentIndex]}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
          onNext={handleNext}
          onPrev={handlePrev}
          total={flashcards.length}
          current={currentIndex}
        />
      </div>
    </div>
  );
};

export default PythonFlashcards;