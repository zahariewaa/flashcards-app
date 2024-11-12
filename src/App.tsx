import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MathVisualizer from './pages/MathVisualizer';
import PythonFlashcards from './pages/PythonFlashcards';
import AlgorithmVisualizer from './pages/AlgorithmVisualizer';
import { TabProvider } from './context/TabContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math" element={
            <TabProvider>
              <MathVisualizer />
            </TabProvider>
          } />
          <Route path="/python" element={<PythonFlashcards />} />
          <Route path="/algorithms" element={<AlgorithmVisualizer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;