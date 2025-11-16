
import React from 'react';
import { TeamMember } from '../types';
import Card from './ui/Card';

const teamMembers: TeamMember[] = [
  { name: 'Luca D\'Amico', role: 'Scrum Master', avatarUrl: 'https://picsum.photos/seed/lucadamicoprofile/200' },
  { name: 'Luca D\'Amico', role: 'Developer & Analyst', avatarUrl: 'https://picsum.photos/seed/lucadamicoprofile/200' },
  { name: 'Luca D\'Amico', role: 'Chief Happiness Officer', avatarUrl: 'https://picsum.photos/seed/lucadamicoprofile/200' },
  { name: 'Luca D\'Amico', role: 'Responsabile IT', avatarUrl: 'https://picsum.photos/seed/lucadamicoprofile/200' },
  { name: 'Luca D\'Amico', role: 'Product Owner (Proxy)', avatarUrl: 'https://picsum.photos/seed/lucadamicoprofile/200' },
];

const Team: React.FC = () => {
  return (
    <section id="team">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">Il Mio Ruolo nel Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.role} className="text-center">
            <div className="p-6 flex flex-col items-center">
              <img src={member.avatarUrl} alt={member.name} className="w-24 h-24 rounded-full mb-4 shadow-md" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
