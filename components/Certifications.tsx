import React from 'react';
import { Award } from 'lucide-react';
import Card from './ui/Card';
import cvData from '../cv-data.ts';

const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
        Formazione & Certificazioni
      </h3>
      <Card>
        <div className="p-8">
          <div className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-4">
            {cvData.certifications.map((cert) => (
              <div key={cert.name} className="mb-8 pl-8 relative">
                <div className="absolute -left-4 top-1.5 w-7 h-7 bg-primary-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{cert.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Certifications;