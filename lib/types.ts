export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

export type TaskStore = {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};