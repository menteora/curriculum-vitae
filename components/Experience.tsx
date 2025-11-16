import React from 'react';
import Card from './ui/Card';
import cvData from '../cv-data.ts';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
        Esperienze Professionali
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cvData.experience.map(exp => (
          <Card key={exp.company}>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{exp.company}</h3>
              <ul className="space-y-2">
                {exp.roles.map(role => (
                   <li key={role} className="text-slate-600 dark:text-slate-300">{role}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;