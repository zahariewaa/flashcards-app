import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import { useTabContext } from '../context/TabContext';

const EquationSolver: React.FC = () => {
  const { activeTab } = useTabContext();
  const [equation, setEquation] = useState('2x + 5 = 13');
  const [steps, setSteps] = useState<string[]>([]);
  const [error, setError] = useState('');

  const solveEquation = () => {
    try {
      const [leftSide, rightSide] = equation.split('=').map(side => side.trim());
      if (!leftSide || !rightSide) throw new Error('Invalid equation format');

      const steps: string[] = [equation];
      
      // Move all terms with x to the left side
      const withXTerms = leftSide.replace(/([+-]?\s*\d*x)/g, '$1');
      const withoutXTerms = leftSide.replace(/([+-]?\s*\d*x)/g, '');
      
      // Combine like terms
      const xCoefficient = evaluate(withXTerms.replace(/x/g, ''));
      const constant = evaluate(rightSide) - evaluate(withoutXTerms);
      
      steps.push(`${xCoefficient}x = ${constant}`);
      
      // Solve for x
      const solution = constant / xCoefficient;
      steps.push(`x = ${solution}`);
      
      // Verify solution
      const verification = equation.replace(/x/g, `(${solution})`);
      const [verifyLeft, verifyRight] = verification.split('=');
      const verifyLeftResult = evaluate(verifyLeft);
      const verifyRightResult = evaluate(verifyRight);
      
      steps.push(`Verification: ${verifyLeftResult} = ${verifyRightResult}`);
      
      setSteps(steps);
      setError('');
    } catch (e) {
      setError('Invalid equation format. Please use the format: ax + b = c');
      setSteps([]);
    }
  };

  if (activeTab !== 'solver') return null;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter Linear Equation
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter an equation (e.g., 2x + 5 = 13)"
          />
          <button
            onClick={solveEquation}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Solve
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {steps.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Solution Steps</h3>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 bg-white rounded-md shadow-sm"
              >
                <span className="text-blue-600 font-medium">Step {index + 1}</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Tips</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Use 'x' as the variable in your equation</li>
          <li>• Format your equation as: ax + b = c</li>
          <li>• Use standard arithmetic operators: +, -, *, /</li>
          <li>• Make sure to include the equals sign (=)</li>
        </ul>
      </div>
    </div>
  );
};

export default EquationSolver;