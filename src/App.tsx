import React from 'react';
import { Timeline } from './widgets/Timeline/ui/Timeline';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Timeline />
    </div>
  );
};
