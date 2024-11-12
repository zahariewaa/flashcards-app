import React, { useState, useCallback, useRef } from 'react';
import { GitGraph } from 'lucide-react';
import ArrayVisualizer from '../components/algorithm/ArrayVisualizer';
import AlgorithmControls from '../components/algorithm/AlgorithmControls';
import { bubbleSort, quickSort } from '../utils/sortingAlgorithms';

type Algorithm = 'bubble' | 'quick';

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState<number[]>(() => 
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
  );
  const [algorithm, setAlgorithm] = useState<Algorithm>('bubble');
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<{
    array: number[];
    comparing: number[];
    swapping: number[];
  }>({ array: [...array], comparing: [], swapping: [] });

  const animationRef = useRef<number>();

  const resetArray = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setCurrentStep({ array: newArray, comparing: [], swapping: [] });
    setIsRunning(false);
  }, []);

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsRunning(false);
  };

  const runAlgorithm = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    const steps = algorithm === 'bubble' 
      ? bubbleSort([...array]) 
      : quickSort([...array]);

    let stepIndex = 0;

    const animate = async () => {
      if (stepIndex < steps.length) {
        setCurrentStep(steps[stepIndex]);
        stepIndex++;
        await new Promise(resolve => setTimeout(resolve, speed));
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsRunning(false);
      }
    };

    animate();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GitGraph className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Algorithm Visualizer</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Watch sorting algorithms in action with step-by-step visualization.
          Understand how different algorithms work through interactive demonstrations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <AlgorithmControls
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            speed={speed}
            setSpeed={setSpeed}
            isRunning={isRunning}
            onReset={resetArray}
            onStart={runAlgorithm}
            onStop={stopAnimation}
          />
        </div>

        <ArrayVisualizer
          array={currentStep.array}
          comparing={currentStep.comparing}
          swapping={currentStep.swapping}
        />

        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Algorithm Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Time Complexity</h4>
              <p className="text-gray-600">
                {algorithm === 'bubble' ? (
                  'Bubble Sort: O(n²) - Simple but inefficient for large datasets'
                ) : (
                  'Quick Sort: O(n log n) - Efficient divide-and-conquer algorithm'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">How it Works</h4>
              <p className="text-gray-600">
                {algorithm === 'bubble' ? (
                  'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
                ) : (
                  'Picks a pivot element and partitions the array around it, recursively sorting the sub-arrays.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;