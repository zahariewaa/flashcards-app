import React, { useState } from 'react';
import { Code, BookOpen } from 'lucide-react';
import { FlashCard } from '../components/FlashCard';
import { flashcards } from '../data/flashcards';

const PythonFlashcards = () => {
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
          Master Python programming concepts through interactive flashcards.
          Test your knowledge and learn at your own pace.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <FlashCard
          card={flashcards[currentIndex]}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
          onNext={handleNext}
          onPrev={handlePrev}
          total={flashcards.length}
          current={currentIndex}
        />

        <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-indigo-600" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Study Tips</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              • Click on the card to flip between question and answer
            </li>
            <li className="flex items-center gap-2">
              • Try to answer before revealing the solution
            </li>
            <li className="flex items-center gap-2">
              • Review the explanation and example code carefully
            </li>
            <li className="flex items-center gap-2">
              • Practice writing the code examples yourself
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcards;