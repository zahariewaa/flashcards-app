import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Code, Brain, ArrowRight, Users, Sparkles, Rocket } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Interactive Learning",
      description: "Engage with dynamic tools designed to enhance your understanding of complex concepts."
    },
    {
      icon: Users,
      title: "Self-Paced Study",
      description: "Learn at your own pace with our comprehensive suite of educational tools."
    },
    {
      icon: Sparkles,
      title: "Visual Understanding",
      description: "Transform abstract concepts into clear, visual representations for better comprehension."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Master Math & Python with Interactive Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Explore mathematical concepts and learn Python programming through our interactive visualization tools and flashcards.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/math"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <LineChart size={20} />
            Try Math Visualizer
          </Link>
          <Link
            to="/python"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <Code size={20} />
            Start Python Flashcards
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <feature.icon className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Tools Overview */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="text-indigo-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-800">Math Expression Visualizer</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Plot mathematical functions, visualize equations, and solve mathematical problems step by step. Perfect for understanding complex mathematical concepts.
          </p>
          <Link
            to="/math"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            Explore Math Tools <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-indigo-600" size={32} />
            <h2 className="text-2xl font-bold text-gray-800">Python Flashcards</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Master Python programming concepts with our interactive flashcard system. Learn syntax, data types, functions, and more through spaced repetition.
          </p>
          <Link
            to="/python"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            Start Learning Python <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;