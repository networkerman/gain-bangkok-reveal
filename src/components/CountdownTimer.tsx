
import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/countdown';

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  // April 24, 2025, 00:00:00 Bangkok time (UTC+7)
  const targetDate = new Date('2025-04-24T00:00:00+07:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg mx-auto mt-6">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 md:p-5 w-full">
            <div className="text-2xl md:text-4xl font-bold text-white text-center">
              {value !== undefined ? value : 0}
            </div>
          </div>
          <span className="text-xs md:text-sm font-medium text-white mt-2">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
