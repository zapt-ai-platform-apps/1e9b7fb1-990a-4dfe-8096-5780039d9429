import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TasksSection from './components/TasksSection';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('App loaded: المحقق السيبراني الخاص');
  }, []);

  const handleStart = () => {
    console.log('Start process initiated.');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Process completed.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow">
        <HeroSection loading={loading} handleStart={handleStart} />
        <TasksSection />
      </main>
      <footer className="py-4">
        <div className="text-center">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-sm text-gray-600 underline"
          >
            Made on ZAPT
          </a>
        </div>
      </footer>
    </div>
  );
}