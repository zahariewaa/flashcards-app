import React from 'react';
import { ChevronRight, ChevronLeft, Code } from 'lucide-react';
import type { Flashcard } from '../data/flashcards';

interface FlashCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onNext: () => void;
  onPrev: () => void;
  total: number;
  current: number;
}

export function FlashCard({ card, isFlipped, onFlip, onNext, onPrev, total, current }: FlashCardProps) {
  return (
    <div className="w-full max-w-2xl">
      <div 
        onClick={onFlip}
        className="cursor-pointer perspective-1000 relative w-full aspect-[3/2] group"
      >
        <div className={`absolute w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <div className="text-sm text-indigo-600 mb-2">{card.category}</div>
            <div className="flex-grow flex items-center justify-center text-xl font-medium text-gray-800 text-center">
              {card.question}
            </div>
            <div className="text-sm text-gray-500 text-center mt-4">Click to reveal answer</div>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-8 rotate-y-180 flex flex-col">
            <div className="text-sm text-indigo-600 mb-2">{card.category}</div>
            <div className="flex-grow flex flex-col gap-4">
              <div className="text-xl font-medium text-gray-800">{card.answer}</div>
              {card.code && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <Code className="inline-block mr-2 mb-1" size={16} />
                  <pre>{card.code}</pre>
                </div>
              )}
              <div className="text-gray-600 mt-2">{card.explanation}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
          disabled={current === 0}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <div className="text-gray-600">
          {current + 1} / {total}
        </div>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
          disabled={current === total - 1}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}