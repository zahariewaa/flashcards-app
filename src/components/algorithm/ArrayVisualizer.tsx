import React from 'react';

interface ArrayVisualizerProps {
  array: number[];
  comparing: number[];
  swapping: number[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({
  array,
  comparing,
  swapping,
}) => {
  const maxValue = Math.max(...array);

  return (
    <div className="flex items-end justify-center gap-1 h-64 p-4">
      {array.map((value, index) => (
        <div
          key={index}
          className={`w-8 transition-all duration-200 ${
            comparing.includes(index)
              ? 'bg-yellow-400'
              : swapping.includes(index)
              ? 'bg-green-400'
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
  );
};

export default ArrayVisualizer;