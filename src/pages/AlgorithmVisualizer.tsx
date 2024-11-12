import React, { useState, useCallback, useRef } from 'react';
import { GitGraph } from 'lucide-react';
import ArrayVisualizer from '../components/algorithm/ArrayVisualizer';
import AlgorithmControls from '../components/algorithm/AlgorithmControls';
import { bubbleSort, quickSort, insertionSort, mergeSort, selectionSort, heapSort, shellSort, countingSort } from '../utils/sortingAlgorithms';

type Algorithm = 'bubble' | 'quick' | 'insertion' | 'merge' | 'selection' | 'heap' | 'shell' | 'counting';

const algorithmInfo = {
  bubble: {
    name: 'Bubble Sort',
    timeComplexity: 'O(n²)',
    description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    bestCase: 'O(n) - When array is already sorted',
    worstCase: 'O(n²) - When array is reverse sorted',
    spaceComplexity: 'O(1) - Only requires a single additional memory space'
  },
  quick: {
    name: 'Quick Sort',
    timeComplexity: 'O(n log n)',
    description: 'Picks a pivot element and partitions the array around it, recursively sorting the sub-arrays.',
    bestCase: 'O(n log n) - When pivot always divides array in half',
    worstCase: 'O(n²) - When array is already sorted and last element is chosen as pivot',
    spaceComplexity: 'O(log n) - Due to recursive calls'
  },
  insertion: {
    name: 'Insertion Sort',
    timeComplexity: 'O(n²)',
    description: 'Builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.',
    bestCase: 'O(n) - When array is already sorted',
    worstCase: 'O(n²) - When array is reverse sorted',
    spaceComplexity: 'O(1) - Only requires a single additional memory space'
  },
  merge: {
    name: 'Merge Sort',
    timeComplexity: 'O(n log n)',
    description: 'Divides the array into two halves, recursively sorts them, and then merges the sorted halves.',
    bestCase: 'O(n log n) - Always divides array in half',
    worstCase: 'O(n log n) - Consistent performance regardless of input',
    spaceComplexity: 'O(n) - Requires additional space proportional to input size'
  },
  selection: {
    name: 'Selection Sort',
    timeComplexity: 'O(n²)',
    description: 'Repeatedly finds the minimum element from the unsorted portion and places it at the beginning.',
    bestCase: 'O(n²) - Same number of comparisons regardless of input',
    worstCase: 'O(n²) - Consistent performance regardless of input',
    spaceComplexity: 'O(1) - Only requires a single additional memory space'
  },
  heap: {
    name: 'Heap Sort',
    timeComplexity: 'O(n log n)',
    description: 'Builds a max-heap from the array and repeatedly extracts the maximum element.',
    bestCase: 'O(n log n) - Consistent performance',
    worstCase: 'O(n log n) - Consistent performance',
    spaceComplexity: 'O(1) - In-place sorting algorithm'
  },
  shell: {
    name: 'Shell Sort',
    timeComplexity: 'O(n log n)',
    description: 'Improves upon insertion sort by comparing elements separated by a gap. The gap is gradually decreased.',
    bestCase: 'O(n log n) - When array is nearly sorted',
    worstCase: 'O(n²) - Depends on gap sequence',
    spaceComplexity: 'O(1) - In-place sorting algorithm'
  },
  counting: {
    name: 'Counting Sort',
    timeComplexity: 'O(n + k)',
    description: 'Non-comparative integer sorting algorithm that counts the occurrences of each element.',
    bestCase: 'O(n + k) - k is the range of input',
    worstCase: 'O(n + k) - Consistent performance',
    spaceComplexity: 'O(k) - Requires counting array of size k'
  }
};

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
    pivot?: number;
    highlights?: number[];
    auxiliaryArray?: number[];
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
    let steps;
    switch (algorithm) {
      case 'bubble':
        steps = bubbleSort([...array]);
        break;
      case 'quick':
        steps = quickSort([...array]);
        break;
      case 'insertion':
        steps = insertionSort([...array]);
        break;
      case 'merge':
        steps = mergeSort([...array]);
        break;
      case 'selection':
        steps = selectionSort([...array]);
        break;
      case 'heap':
        steps = heapSort([...array]);
        break;
      case 'shell':
        steps = shellSort([...array]);
        break;
      case 'counting':
        steps = countingSort([...array]);
        break;
      default:
        steps = bubbleSort([...array]);
    }

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

  const info = algorithmInfo[algorithm];

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
          pivot={currentStep.pivot}
          highlights={currentStep.highlights}
          auxiliaryArray={currentStep.auxiliaryArray}
        />

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{info.name}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Time Complexity</h4>
              <p className="text-gray-600 mb-4">Average Case: {info.timeComplexity}</p>
              <p className="text-gray-600 mb-2">Best Case: {info.bestCase}</p>
              <p className="text-gray-600">Worst Case: {info.worstCase}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">How it Works</h4>
              <p className="text-gray-600 mb-4">{info.description}</p>
              <p className="text-gray-600">Space Complexity: {info.spaceComplexity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;