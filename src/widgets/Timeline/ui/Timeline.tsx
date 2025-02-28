import React, { useState } from 'react';
import { CircleNavigation } from '../../../features/CircleNavigation/ui/CircleNavigation';
import { EventsSlider } from '../../../features/EventsSlider/ui/EventsSlider';
import { TIMELINE_DATA } from '../../../shared/constants/timelineData';
import './Timeline.scss';

export const Timeline: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(1);
  const currentPeriod = TIMELINE_DATA.periods.find((p) => p.id === activePeriod);

  const handlePeriodChange = (periodId: number) => {
    setActivePeriod(periodId);
  };

  if (!currentPeriod) return null;

  return (
    <div className="timeline-widget">
      <div className="timeline-content">
        <header className="timeline-header">
          <h1 className="timeline-title">Исторические даты</h1>
        </header>
        <div className="timeline-circle-container">
          <div className="years-display">
            <span className="year start">{currentPeriod.startYear}</span>
            <span className="year end">{currentPeriod.endYear}</span>
          </div>
          <CircleNavigation
            periods={TIMELINE_DATA.periods}
            activePeriod={activePeriod}
            onPeriodChange={handlePeriodChange}
          />
        </div>
        <EventsSlider events={currentPeriod.events} />
        <div className="timeline-controls">
          <div className="header-navigation">
            <button
              className="nav-button prev"
              onClick={() => {
                const prevPeriod =
                  activePeriod > 1 ? activePeriod - 1 : TIMELINE_DATA.periods.length;
                handlePeriodChange(prevPeriod);
              }}>
              <span className="arrow">←</span>
            </button>
            <button
              className="nav-button next"
              onClick={() => {
                const nextPeriod =
                  activePeriod < TIMELINE_DATA.periods.length ? activePeriod + 1 : 1;
                handlePeriodChange(nextPeriod);
              }}>
              <span className="arrow">→</span>
            </button>
          </div>
          <div className="counter">
            {String(activePeriod).padStart(2, '0')}/
            {String(TIMELINE_DATA.periods.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};
