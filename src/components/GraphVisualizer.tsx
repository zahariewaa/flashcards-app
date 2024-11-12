import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTabContext } from '../context/TabContext';

const GraphVisualizer: React.FC = () => {
  const { activeTab } = useTabContext();
  const [expression, setExpression] = useState('x^2');
  const [data, setData] = useState<Array<{ x: number; y: number }>>([]);
  const [error, setError] = useState('');
  const [range, setRange] = useState({ min: -10, max: 10, steps: 100 });

  useEffect(() => {
    generateData();
  }, [expression, range]);

  const generateData = () => {
    try {
      const step = (range.max - range.min) / range.steps;
      const newData = [];
      
      for (let x = range.min; x <= range.max; x += step) {
        try {
          const scope = { x };
          const y = evaluate(expression, scope);
          if (typeof y === 'number' && !isNaN(y) && Math.abs(y) !== Infinity) {
            newData.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(4)) });
          }
        } catch (e) {
          continue;
        }
      }
      
      setData(newData);
      setError('');
    } catch (e) {
      setError('Invalid expression');
    }
  };

  if (activeTab !== 'graph') return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function f(x) =
          </label>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a mathematical expression (e.g., x^2)"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min X</label>
            <input
              type="number"
              value={range.min}
              onChange={(e) => setRange({ ...range, min: Number(e.target.value) })}
              className="w-24 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max X</label>
            <input
              type="number"
              value={range.max}
              onChange={(e) => setRange({ ...range, max: Number(e.target.value) })}
              className="w-24 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x" 
              domain={['auto', 'auto']}
              type="number"
              tickFormatter={(value) => value.toFixed(1)}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip 
              formatter={(value: number) => [value.toFixed(4), 'f(x)']}
              labelFormatter={(label: number) => `x = ${label.toFixed(2)}`}
            />
            <Line 
              type="monotone" 
              dataKey="y" 
              stroke="#3b82f6" 
              dot={false} 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Quick Reference</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium">Basic Operations:</p>
            <ul className="text-gray-600">
              <li>Addition: +</li>
              <li>Subtraction: -</li>
              <li>Multiplication: *</li>
              <li>Division: /</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Functions:</p>
            <ul className="text-gray-600">
              <li>Power: ^</li>
              <li>Square root: sqrt(x)</li>
              <li>Sine: sin(x)</li>
              <li>Cosine: cos(x)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Constants:</p>
            <ul className="text-gray-600">
              <li>π (pi): pi</li>
              <li>e: e</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphVisualizer;