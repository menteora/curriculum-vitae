
import React from 'react';
import { UserStory, TaskStatus } from '../types';
import Card from './ui/Card';
import { List, BarChart3, ChevronUp, ChevronsUp, ChevronDown } from 'lucide-react';

const backlogItems: UserStory[] = [
    { id: 'EXP-001', title: 'Guida e coaching del team come Scrum Master', description: 'Promuovere l\'adozione di Scrum per migliorare l\'efficacia del team.', points: 13, status: TaskStatus.IN_PROGRESS, priority: 'High' },
    { id: 'EXP-002', title: 'Sviluppo e manutenzione applicativi (React, Vue, FastAPI)', description: 'Realizzazione di siti web e applicazioni frontend/backend.', points: 21, status: TaskStatus.IN_PROGRESS, priority: 'High' },
    { id: 'EXP-003', title: 'Gestione Sistemi Informativi e scelte tecnologiche', description: 'Responsabilità sulla manutenzione e rinnovo dell\'infrastruttura tecnologica.', points: 13, status: TaskStatus.IN_PROGRESS, priority: 'High' },
    { id: 'EXP-004', title: 'Progettazione Organizzazione Positiva (CHO)', description: 'Disegnare e prototipare un ambiente di lavoro positivo e inclusivo.', points: 8, status: TaskStatus.IN_PROGRESS, priority: 'Medium' },
    { id: 'EXP-005', title: 'Implementazione politiche D&I e SGI (ISO 9001)', description: 'Promuovere l\'inclusione e la parità di genere e assicurare la qualità dei processi.', points: 5, status: TaskStatus.IN_PROGRESS, priority: 'Medium' },
    { id: 'EDU-001', title: 'Formazione su Diversità e Inclusione', description: 'Acquisire competenze su partita di genere e sistemi di gestione per la qualità.', points: 3, status: TaskStatus.DONE, priority: 'Medium' },
    { id: 'EXP-006', title: 'Specializzazione in Software Development (2013-2021)', description: 'Periodo di focus primario sullo sviluppo software.', points: 21, status: TaskStatus.DONE, priority: 'High' },
    { id: 'EXP-007', title: 'Gestione completa Help-Desk (2006-2008)', description: 'Gestione del supporto software interno e coordinamento reparto.', points: 8, status: TaskStatus.DONE, priority: 'Medium' },
    { id: 'EDU-002', title: 'Formazione Comunicazione Non Violenta (CNV)', description: 'Apprendimento tecniche di comunicazione empatica.', points: 3, status: TaskStatus.DONE, priority: 'Medium' },
    { id: 'EDU-003', title: 'Certificazione Android Enterprise Associate', description: 'Ottenimento della certificazione ufficiale di Google.', points: 5, status: TaskStatus.DONE, priority: 'Low' },
    { id: 'GOAL-01', title: 'Automatizzare il reporting di fine Sprint', description: 'Introdurre uno strumento per generare automaticamente i report di Sprint.', points: 5, status: TaskStatus.TODO, priority: 'Medium' },
];

const priorityIcons = {
  High: <ChevronsUp className="h-5 w-5 text-red-500" />,
  Medium: <ChevronUp className="h-5 w-5 text-yellow-500" />,
  Low: <ChevronDown className="h-5 w-5 text-green-500" />,
};

const ProductBacklog: React.FC = () => {
  return (
    <section id="backlog">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">Product Backlog</h2>
      <Card>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-semibold flex items-center">
            <List className="h-5 w-5 mr-2 text-primary-500" />
            Esperienze e Obiettivi
          </h3>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <BarChart3 className="h-4 w-4 mr-2" />
            <span>Total Points: {backlogItems.reduce((acc, item) => acc + item.points, 0)}</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Titolo</th>
                <th scope="col" className="px-6 py-3 text-center">Story Points</th>
                <th scope="col" className="px-6 py-3 text-center">Priorità</th>
                <th scope="col" className="px-6 py-3">Stato</th>
              </tr>
            </thead>
            <tbody>
              {backlogItems.map((item) => (
                <tr key={item.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/20">
                  <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{item.id}</th>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{item.points}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center" title={item.priority}>
                      {priorityIcons[item.priority]}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === TaskStatus.DONE ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      item.status === TaskStatus.IN_PROGRESS ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-200'
                    }`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
};

export default ProductBacklog;
