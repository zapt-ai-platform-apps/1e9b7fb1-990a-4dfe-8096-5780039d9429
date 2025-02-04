import React, { useState, useEffect } from 'react';
import HeroSection from './screens/Home/HeroSection';
import TasksSection from './screens/Home/TasksSection';
import InvestigationFlow from './screens/Flow/InvestigationFlow';

export default function App() {
  const [investigationStarted, setInvestigationStarted] = useState(false);

  useEffect(() => {
    console.log('App loaded: المحقق السيبراني الخاص');
  }, []);

  const handleStart = () => {
    console.log('Starting investigation flow.');
    setInvestigationStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <main className="flex-grow h-full">
        {!investigationStarted ? (
          <>
            <HeroSection handleStart={handleStart} />
            <TasksSection />
          </>
        ) : (
          <InvestigationFlow />
        )}
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