
import React, { ReactNode } from 'react';

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  description: React.ReactNode;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-netcore-purple">{title}</h3>
      </div>
      <div className="text-gray-700">{description}</div>
    </div>
  );
};

export default InfoCard;
