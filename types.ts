export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

export type Priority = 'High' | 'Medium' | 'Low';

export interface UserStory {
  id: string;
  title: string;
  description: string;
  points: number;
  status: TaskStatus;
  priority: Priority;
}

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
}
