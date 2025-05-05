
import React from 'react';
import { Check } from 'lucide-react';

export interface Goal {
  id: string;
  title: string;
  category: 'fitness' | 'nutrition' | 'mental';
  progress: number;
  icon: string;
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
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getColorByCategory()}`}>
        {goal.icon}
      </div>
      <div className="flex-1 relative">
        <input
          type="range"
          min="0"
          max="100"
          value={goal.progress}
          onChange={handleProgressChange}
          className="w-full h-6 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${
              goal.category === 'fitness' ? '#4361EE' : 
              goal.category === 'nutrition' ? '#2ECC71' : 
              '#9B5DE5'
            } ${goal.progress}%, #e0e0e0 ${goal.progress}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default GoalItem;
