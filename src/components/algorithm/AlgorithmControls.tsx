import React from 'react';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';

type Algorithm = 'bubble' | 'quick' | 'insertion' | 'merge' | 'selection' | 'heap' | 'shell' | 'counting';

interface AlgorithmControlsProps {
  algorithm: Algorithm;
  setAlgorithm: (algo: Algorithm) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const AlgorithmControls: React.FC<AlgorithmControlsProps> = ({
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  isRunning,
  onStart,
  onStop,
  onReset,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          disabled={isRunning}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="shell">Shell Sort</option>
          <option value="counting">Counting Sort</option>
        </select>

        <div className="flex items-center gap-2">
          <Settings size={18} className="text-gray-600" />
          <input
            type="range"
            min="10"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-32"
            disabled={isRunning}
          />
          <span className="text-sm text-gray-600">{speed}ms</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onReset}
          disabled={isRunning}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw size={18} />
          Reset
        </button>
        <button
          onClick={isRunning ? onStop : onStart}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-white ${
            isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isRunning ? (
            <>
              <Pause size={18} />
              Stop
            </>
          ) : (
            <>
              <Play size={18} />
              Start
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AlgorithmControls;