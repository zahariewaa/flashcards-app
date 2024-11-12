import React from 'react';

interface ArrayVisualizerProps {
  array: number[];
  comparing: number[];
  swapping: number[];
  pivot?: number;
  highlights?: number[];
  auxiliaryArray?: number[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  array,
  comparing,
  swapping,
  pivot,
  highlights = [],
  auxiliaryArray,
}) => {
  const maxValue = Math.max(...array);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-center gap-1 h-64 p-4">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-8 transition-all duration-200 ${
              pivot === index
                ? 'bg-purple-400'
                : comparing.includes(index)
                ? 'bg-yellow-400'
                : swapping.includes(index)
                ? 'bg-green-400'
                : highlights.includes(index)
                ? 'bg-pink-400'
                : 'bg-indigo-400'
            }`}
            style={{
              height: `${(value / maxValue) * 100}%`,
            }}
          >
            <div className="text-xs text-center mt-2 transform -rotate-90 origin-left">
              {value}
            </div>
          </div>
        ))}
      </div>

      {auxiliaryArray && (
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Auxiliary Array</h4>
          <div className="flex items-center justify-center gap-1">
            {auxiliaryArray.map((value, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-100 flex items-center justify-center text-xs border border-gray-200 rounded"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrayVisualizer;