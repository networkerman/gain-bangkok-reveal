
import React from 'react';
import { Download } from 'lucide-react';

type ResourceCardProps = {
  title: string;
  description: string;
  downloadUrl: string;
  fileName: string;
  icon?: React.ReactNode;
};

const ResourceCard = ({ title, description, downloadUrl, fileName, icon }: ResourceCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center mb-4">
        {icon && <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">{icon}</div>}
        <h3 className="text-xl font-bold text-netcore-purple">{title}</h3>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <a 
        href={downloadUrl}
        download={fileName}
        className="inline-flex items-center text-netcore-purple hover:text-netcore-gold transition-colors"
      >
        <Download size={18} className="mr-2" />
        Download {fileName}
      </a>
    </div>
  );
};

export default ResourceCard;
