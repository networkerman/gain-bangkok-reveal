
import React from 'react';
import { Check, X } from 'lucide-react';

type GuidelineCardProps = {
  title: string;
  items: string[];
  type: 'do' | 'avoid';
};

const GuidelineCard = ({ title, items, type }: GuidelineCardProps) => {
  return (
    <div className={`border rounded-lg p-6 shadow-sm ${type === 'do' ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${type === 'do' ? 'bg-green-500' : 'bg-red-500'} text-white mr-3`}>
          {type === 'do' ? <Check size={20} /> : <X size={20} />}
        </div>
        <h3 className={`text-xl font-bold ${type === 'do' ? 'text-green-700' : 'text-red-700'}`}>{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 mt-1 ${type === 'do' ? 'text-green-500' : 'text-red-500'}`}>
              {type === 'do' ? '✓' : '✗'}
            </span>
            <span className={`${type === 'do' ? 'text-green-800' : 'text-red-800'}`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuidelineCard;
