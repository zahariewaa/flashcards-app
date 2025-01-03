import React, { useState, useMemo } from 'react';
import { Code, Filter } from 'lucide-react';
import { FlashCard } from '../components/FlashCard';
import { flashcards } from '../data/flashcards';

const PythonFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(flashcards.map(card => card.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  const filteredCards = useMemo(() => {
    return selectedCategory === 'all'
      ? flashcards
      : flashcards.filter(card => card.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setCurrentIndex(0);
    setIsFlipped(false);
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

      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
          <Filter className="text-gray-500" size={20} />
          <select
            className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-600"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        {filteredCards.length > 0 ? (
          <FlashCard
            card={filteredCards[currentIndex]}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
            onNext={handleNext}
            onPrev={handlePrev}
            total={filteredCards.length}
            current={currentIndex}
          />
        ) : (
          <div className="text-center text-gray-600">
            No flashcards available for this category.
          </div>
        )}
      </div>

      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Study Progress</h2>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Current Category: {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
            <span>Cards: {currentIndex + 1} / {filteredCards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcards;
