import React from 'react';
import { LineChart } from 'lucide-react';
import GraphVisualizer from '../components/GraphVisualizer';
import EquationSolver from '../components/EquationSolver';
import TabNavigation from '../components/TabNavigation';

const MathVisualizer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <LineChart className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Math Expression Visualizer</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore mathematical functions, visualize graphs, and solve equations step by step.
          Perfect for learning and understanding mathematical concepts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <TabNavigation />
        <div className="mt-6">
          <GraphVisualizer />
          <EquationSolver />
        </div>
      </div>
    </div>
  );
};

export default MathVisualizer;