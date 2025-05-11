
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export interface Goal {
  id: string;
  title: string;
  category: 'fitness' | 'nutrition' | 'mental';
  progress: number;
  icon: string;
  frequency?: string;
}

interface GoalItemProps {
  goal: Goal;
  onUpdateProgress: (id: string, newProgress: number) => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ goal, onUpdateProgress }) => {
  const getColorByCategory = () => {
    switch (goal.category) {
      case 'fitness':
        return 'bg-[hsl(var(--fitness))]';
      case 'nutrition':
        return 'bg-[hsl(var(--nutrition))]';
      case 'mental':
        return 'bg-[hsl(var(--mental))]';
      default:
        return 'bg-primary';
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(e.target.value);
    onUpdateProgress(goal.id, newProgress);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getColorByCategory()}`}>
            {goal.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground text-sm">{goal.title}</h3>
            {goal.frequency && (
              <p className="text-xs text-muted-foreground">{goal.frequency}</p>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-1 font-medium text-sm bg-gray-200 px-2 py-1 rounded-md">
            {goal.progress}%
          </span>
          <ChevronRight size={16} className="text-muted-foreground" />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Progress value={goal.progress} className="h-2 flex-1" />
        <input
          type="range"
          min="0"
          max="100"
          value={goal.progress}
          onChange={handleProgressChange}
          className="sr-only"
        />
      </div>
    </div>
  );
};

export default GoalItem;
