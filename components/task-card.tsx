'use client';

import { Task } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <Card className="p-4 transition-all hover:shadow-lg">
      <div className="flex items-start gap-4">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
          className="mt-1"
        />
        <div className="flex-1">
          <h3 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
            {task.title}
          </h3>
          <p className={`mt-1 text-sm ${task.completed ? 'text-muted-foreground' : 'text-foreground'}`}>
            {task.description}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Created {format(new Date(task.createdAt), 'PPp')}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(task.id)}
          className="text-destructive hover:text-destructive/90"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}