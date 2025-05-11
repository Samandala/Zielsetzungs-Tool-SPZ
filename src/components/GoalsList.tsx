
import React from 'react';
import GoalItem, { Goal } from './GoalItem';
import { Plus, BarChart2, Calendar, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface GoalsListProps {
  goals: Goal[];
  onUpdateProgress: (id: string, newProgress: number) => void;
  onAddGoal: () => void;
}

const GoalsList: React.FC<GoalsListProps> = ({ goals, onUpdateProgress, onAddGoal }) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="mt-4 md:mt-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl md:text-2xl font-bold text-primary">Meine Ziele</h2>
        <Button 
          onClick={onAddGoal} 
          variant="outline" 
          size="sm" 
          className="rounded-full h-8 w-8 p-0 flex items-center justify-center border-primary text-primary"
        >
          <Plus size={18} />
        </Button>
      </div>
      
      {/* Motivation quote */}
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-white rounded-xl shadow-sm border-l-4 border-accent">
        <p className="text-sm italic text-foreground">
          "Jede Bewegung bringt dich deinem neuen Ich näher - egal wie klein der Schritt ist."
        </p>
      </div>
      
      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 w-full">
          <TabsTrigger value="progress">Fortschritt</TabsTrigger>
          <TabsTrigger value="calendar">Kalender</TabsTrigger>
          <TabsTrigger value="calories">Kalorien</TabsTrigger>
        </TabsList>
        
        <TabsContent value="progress" className="space-y-3 md:space-y-4">
          {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} onUpdateProgress={onUpdateProgress} />
          ))}
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card className="shadow-sm">
            <CardContent className="p-3 md:p-4">
              <h3 className="font-semibold text-primary mb-2">Juni 2025</h3>
              <div className="grid grid-cols-7 gap-1 text-center">
                <div className="text-xs text-muted-foreground">Mo</div>
                <div className="text-xs text-muted-foreground">Di</div>
                <div className="text-xs text-muted-foreground">Mi</div>
                <div className="text-xs text-muted-foreground">Do</div>
                <div className="text-xs text-muted-foreground">Fr</div>
                <div className="text-xs text-muted-foreground">Sa</div>
                <div className="text-xs text-muted-foreground">So</div>
                
                {/* Empty cells for days before month starts */}
                <div className="h-6 md:h-8"></div>
                <div className="h-6 md:h-8"></div>
                <div className="h-6 md:h-8"></div>
                <div className="h-6 md:h-8"></div>
                <div className="h-6 md:h-8"></div>
                <div className="h-6 md:h-8"></div>
                
                {/* Days of the month */}
                {Array.from({ length: 30 }, (_, i) => {
                  // Let's mark some days as completed (with sport activities)
                  const isCompleted = [2, 5, 8, 10, 15, 18, 22, 25, 28].includes(i + 1);
                  return (
                    <div 
                      key={i} 
                      className={`h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center text-xs
                        ${isCompleted ? 'bg-primary text-white' : 'hover:bg-muted'}`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calories">
          <Card className="shadow-sm">
            <CardContent className="p-3 md:p-4">
              <h3 className="font-semibold text-primary mb-2">Kalorientracking</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tagesbedarf</span>
                    <span>1600 kcal</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bereits gegessen</span>
                    <span>1100 kcal</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Noch verfügbar</span>
                    <span>500 kcal</span>
                  </div>
                </div>
                
                <div className="w-full bg-muted h-3 md:h-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: '68%' }}
                  ></div>
                </div>
                
                <Button className="w-full">Mahlzeit hinzufügen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default GoalsList;
