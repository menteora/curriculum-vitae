import React from 'react';
import { Rocket, Check } from 'lucide-react';
import Card from './ui/Card';
import cvData from '../cv-data';

const WhatResults: React.FC = () => {
  const { title, items } = cvData.whatResults;
  return (
    <section id="what-results">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white flex items-center justify-center">
        <Rocket className="h-8 w-8 mr-3 text-primary-500" />
        {title}
      </h2>
      <Card>
        <div className="p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start text-slate-700 dark:text-slate-200">
                <Check className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default WhatResults;
