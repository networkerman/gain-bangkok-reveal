
import React from 'react';

type EventCardProps = {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
};

const EventCard = ({ time, title, description, speaker, location }: EventCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="text-sm font-semibold text-gray-500 mb-2">{time}</div>
      <h3 className="text-xl font-bold text-netcore-purple mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex flex-col space-y-2">
        {speaker && (
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">Speaker:</span>
            <span className="text-sm ml-2">{speaker}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">Location:</span>
            <span className="text-sm ml-2">{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
