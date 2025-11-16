import React from 'react';
import { Heart, Compass } from 'lucide-react';
import cvData from '../cv-data.ts';

const WhyMission: React.FC = () => {
  const { title, statements } = cvData.whyMission;
  return (
    <section id="why-mission">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-3xl font-bold flex items-center mb-4">
          <Compass className="h-8 w-8 mr-3" />
          {title}
        </h2>
        <div className="space-y-4">
          {statements.map((statement, index) => (
             <p key={index} className="text-lg text-primary-100 italic flex items-start">
              <Heart className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary-300" />
              <span>{statement}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMission;
