import React from 'react';
import { useTabContext } from '../context/TabContext';
import { LineChart, Calculator } from 'lucide-react';

const TabNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useTabContext();

  const tabs = [
    { id: 'graph', label: 'Graph Visualizer', icon: LineChart },
    { id: 'solver', label: 'Equation Solver', icon: Calculator },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`
              flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm
              ${activeTab === id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;