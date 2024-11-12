import React, { useState, useMemo } from 'react';
import { Book } from 'lucide-react';
import { FlashCard } from './components/FlashCard';
import { flashcards } from './data/flashcards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(flashcards.map(card => card.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredCards = useMemo(() => {
    return selectedCategory === 'all'
      ? flashcards
      : flashcards.filter(card => card.category === selectedCategory);
  }, [selectedCategory]);

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Book className="text-indigo-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Python Flashcards</h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Master Python programming concepts through interactive flashcards. Select a category and start learning!
          </p>
        </div>

        {/* Category Selection */}
        <div className="max-w-md mx-auto mb-12">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Flashcard */}
        {filteredCards.length > 0 ? (
          <div className="flex justify-center">
            <FlashCard
              card={filteredCards[currentIndex]}
              isFlipped={isFlipped}
              onFlip={() => setIsFlipped(!isFlipped)}
              onNext={handleNext}
              onPrev={handlePrev}
              total={filteredCards.length}
              current={currentIndex}
            />
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No flashcards available for this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;