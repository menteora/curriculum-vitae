import React from 'react';
import { Compass, Briefcase, PlayCircle, Package, Scale, Users, Pin, GraduationCap, LucideProps } from 'lucide-react';
import Card from './ui/Card';
import cvData from '../cv-data';

const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Compass,
  Briefcase,
  PlayCircle,
  Package,
  Scale,
  Users,
  Pin,
  GraduationCap
};

const NavigationMenu: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent | React.KeyboardEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="navigation-menu">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-700 dark:text-slate-300">Esplora il Profilo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {cvData.navigation.map((item) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div
              key={item.targetId}
              className="group block cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={(e) => handleScrollTo(e, item.targetId)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleScrollTo(e, item.targetId);
                }
              }}
            >
              <Card className="text-center h-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
                <div className="p-4 flex flex-col items-center justify-center h-full">
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold mb-1">{item.w_question}</span>
                  {IconComponent && <IconComponent className="h-8 w-8 mb-2 text-primary-500 group-hover:scale-110 transition-transform" />}
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.title}</h3>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NavigationMenu;