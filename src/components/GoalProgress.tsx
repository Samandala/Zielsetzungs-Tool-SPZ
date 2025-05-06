
import React from 'react';
import { Check, Calendar, CalendarCheck } from 'lucide-react';
import { Goal } from './GoalItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface GoalProgressProps {
  goals: Goal[];
}

const GoalProgress: React.FC<GoalProgressProps> = ({ goals }) => {
  // Calculate progress steps from goals
  const progressSteps = [
    { title: "Sport", completedSteps: 2, totalSteps: 4 },
    { title: "Ernährung", completedSteps: 3, totalSteps: 3 },
    { title: "Wissen", completedSteps: 2, totalSteps: 4 },
  ];
  
  // Calculate days for streak display
  const currentStreak = 5;
  const bestStreak = 12;
  
  // Calculate average progress
  const averageProgress = Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length);
  
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-primary mb-4">Mein Fortschritt</h2>
      
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">Durchschnittlicher Fortschritt</h3>
            <p className="text-3xl font-bold text-primary">
              {averageProgress}%
            </p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{goals.length}/5</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Calendar className="h-6 w-6 text-primary mb-1" />
            <p className="text-sm text-muted-foreground">Aktuelle Serie</p>
            <p className="text-2xl font-bold">{currentStreak}</p>
            <p className="text-xs text-muted-foreground">Tage</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <CalendarCheck className="h-6 w-6 text-primary mb-1" />
            <p className="text-sm text-muted-foreground">Beste Serie</p>
            <p className="text-2xl font-bold">{bestStreak}</p>
            <p className="text-xs text-muted-foreground">Tage</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        {progressSteps.map((step, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{step.title}</span>
              <span>{step.completedSteps}/{step.totalSteps}</span>
            </div>
            <div className="flex items-center space-x-2">
              {Array.from({ length: step.totalSteps }).map((_, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className={`check-circle ${i < step.completedSteps ? 'completed' : ''}`}>
                    {i < step.completedSteps && <Check className="w-4 h-4 text-white" />}
                  </div>
                  {i < step.totalSteps - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-200">
                      <div 
                        className="h-full bg-green-400" 
                        style={{ 
                          width: i < step.completedSteps - 1 ? '100%' : 
                                 i === step.completedSteps - 1 ? '50%' : '0%' 
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalProgress;
