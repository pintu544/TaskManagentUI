'use client';

import { useTasks } from '@/hooks/use-tasks';
import { AddTaskForm } from '@/components/add-task-form';
import { TaskCard } from '@/components/task-card';
import { CheckCircle2, ListTodo } from 'lucide-react';

export default function Home() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Task Manager</h1>
          <p className="mt-2 text-muted-foreground">
            Stay organized and boost your productivity
          </p>
        </div>

        <div className="mb-8">
          <AddTaskForm onAddTask={addTask} />
        </div>

        <div className="space-y-8">
          {pendingTasks.length > 0 && (
            <section>
              <div className="mb-4 flex items-center gap-2">
                <ListTodo className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Pending Tasks</h2>
                <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {pendingTasks.length}
                </span>
              </div>
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))}
              </div>
            </section>
          )}

          {completedTasks.length > 0 && (
            <section>
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold text-muted-foreground">
                  Completed Tasks
                </h2>
                <span className="ml-2 rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                  {completedTasks.length}
                </span>
              </div>
              <div className="space-y-4">
                {completedTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))}
              </div>
            </section>
          )}

          {tasks.length === 0 && (
            <div className="text-center">
              <p className="text-muted-foreground">No tasks yet. Add one above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}