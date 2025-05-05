
import React from 'react';
import GoalItem, { Goal } from './GoalItem';
import { Plus, Dumbbell, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GoalsListProps {
  goals: Goal[];
  onUpdateProgress: (id: string, newProgress: number) => void;
  onAddGoal: () => void;
}

const GoalsList: React.FC<GoalsListProps> = ({ goals, onUpdateProgress, onAddGoal }) => {
  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Meine Ziele</h2>
        <Button 
          onClick={onAddGoal} 
          variant="outline" 
          size="sm" 
          className="rounded-full h-8 w-8 p-0 flex items-center justify-center border-primary text-primary"
        >
          <Plus size={18} />
        </Button>
      </div>
      
      <div className="space-y-4">
        {goals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} onUpdateProgress={onUpdateProgress} />
        ))}
      </div>
    </section>
  );
};

export default GoalsList;
