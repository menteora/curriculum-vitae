
import React from 'react';
import { UserStory, TaskStatus } from '../types';
import KanbanCard from './ui/KanbanCard';
import { ClipboardList, Loader, CheckSquare } from 'lucide-react';

const sprintTasks: UserStory[] = [
  { id: 'EXP-002', title: 'Sviluppo e manutenzione applicativi (React, Vue, FastAPI)', description: 'Realizzazione di siti web e applicazioni frontend/backend.', points: 21, status: TaskStatus.IN_PROGRESS, priority: 'High' },
  { id: 'EXP-005', title: 'Implementazione politiche D&I e SGI (ISO 9001)', description: 'Promuovere l\'inclusione e la parità di genere e assicurare la qualità dei processi.', points: 5, status: TaskStatus.IN_PROGRESS, priority: 'Medium' },
  { id: 'GOAL-01', title: 'Automatizzare il reporting di fine Sprint', description: 'Introdurre uno strumento per generare automaticamente i report di Sprint.', points: 5, status: TaskStatus.TODO, priority: 'Medium' },
  { id: 'EDU-001', title: 'Formazione su Diversità e Inclusione', description: 'Acquisire competenze su partita di genere e sistemi di gestione per la qualità.', points: 3, status: TaskStatus.DONE, priority: 'Medium' },
];

const columns = [
  { status: TaskStatus.TODO, icon: ClipboardList, color: 'text-slate-500' },
  { status: TaskStatus.IN_PROGRESS, icon: Loader, color: 'text-yellow-500' },
  { status: TaskStatus.DONE, icon: CheckSquare, color: 'text-green-500' },
];

const SprintBoard: React.FC = () => {
  return (
    <section id="sprint-board">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">Sprint Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => {
          const tasksInColumn = sprintTasks.filter(task => task.status === column.status);
          const totalPoints = tasksInColumn.reduce((sum, task) => sum + task.points, 0);
          return (
            <div key={column.status} className="bg-slate-100 dark:bg-slate-900/50 rounded-lg p-4">
              <h3 className={`flex items-center text-lg font-semibold mb-4 pb-2 border-b-2 border-slate-200 dark:border-slate-700 ${column.color}`}>
                <column.icon className="h-5 w-5 mr-2" />
                {column.status}
                <span className="ml-auto text-sm bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-full px-2 py-0.5">
                  {totalPoints}
                </span>
              </h3>
              <div className="min-h-96">
                {tasksInColumn.map(task => <KanbanCard key={task.id} story={task} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SprintBoard;
