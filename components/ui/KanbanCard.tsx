
import React from 'react';
import { UserStory } from '../../types';

interface KanbanCardProps {
  story: UserStory;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ story }) => {
  const priorityColor = {
    High: 'bg-red-500',
    Medium: 'bg-yellow-500',
    Low: 'bg-green-500'
  }

  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 border-l-4 border-primary-500">
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{story.title}</p>
        <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-primary-900 dark:text-primary-200">
          {story.points}
        </span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{story.id}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className={`w-10 h-2 rounded-full ${priorityColor[story.priority]}`} title={`Priority: ${story.priority}`}></div>
        <img src={`https://picsum.photos/seed/${story.id}/32`} alt="Assignee" className="w-6 h-6 rounded-full"/>
      </div>
    </div>
  );
}

export default KanbanCard;
