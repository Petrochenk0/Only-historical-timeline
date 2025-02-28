import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CircleNavigation.scss';
import { TimelinePeriod } from '../../../shared/types/timeline';

interface CircleNavigationProps {
  periods: TimelinePeriod[];
  activePeriod: number;
  onPeriodChange: (periodId: number) => void;
}

export const CircleNavigation: React.FC<CircleNavigationProps> = ({
  periods,
  activePeriod,
  onPeriodChange,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!circleRef.current) return;

    const points = Array.from(circleRef.current.querySelectorAll('.circle-point'));
    const totalPoints = points.length;
    const radius = 265; // Половина от 530px (размер контейнера)
    const startAngle = -90; // Начинаем с верхней точки

    points.forEach((point, index) => {
      const angle = startAngle + (index * 360) / totalPoints;
      const radian = (angle * Math.PI) / 180;
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);

      gsap.set(point, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        left: '50%',
        top: '50%',
      });
    });
  }, [periods]);

  return (
    <div className="circle-navigation">
      <div className="circle-container" ref={circleRef}>
        <div className="circle-line horizontal" />
        <div className="circle-line vertical" />
        {periods.map((period) => (
          <button
            key={period.id}
            className={`circle-point ${period.id === activePeriod ? 'active' : ''}`}
            onClick={() => onPeriodChange(period.id)}>
            <span className="point-number">{period.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
