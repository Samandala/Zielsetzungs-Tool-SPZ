
import React from 'react';
import GoalItem, { Goal } from './GoalItem';
import { Plus, BarChart2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      
      <Tabs defaultValue="progress">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="progress">Fortschritt</TabsTrigger>
          <TabsTrigger value="calendar">Kalender</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="progress" className="space-y-4">
          {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} onUpdateProgress={onUpdateProgress} />
          ))}
        </TabsContent>
        
        <TabsContent value="calendar">
          <div className="h-48 flex items-center justify-center bg-white rounded-xl">
            <Calendar className="w-8 h-8 text-muted-foreground" />
            <p className="ml-2 text-muted-foreground">Kalenderansicht</p>
          </div>
        </TabsContent>
        
        <TabsContent value="trends">
          <div className="h-48 flex items-center justify-center bg-white rounded-xl">
            <BarChart2 className="w-8 h-8 text-muted-foreground" />
            <p className="ml-2 text-muted-foreground">Trendansicht</p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default GoalsList;
