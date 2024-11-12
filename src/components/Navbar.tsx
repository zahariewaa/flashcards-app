import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, LineChart, Code } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: Brain },
    { to: '/math', label: 'Math Visualizer', icon: LineChart },
    { to: '/python', label: 'Python Flashcards', icon: Code },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="text-indigo-600" size={28} />
            <span className="font-bold text-xl text-gray-800">LearnHub</span>
          </Link>
          
          <div className="flex space-x-4">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === to
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;