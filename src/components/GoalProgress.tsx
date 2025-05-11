
import React from 'react';
import { Check, Calendar, CalendarCheck } from 'lucide-react';
import { Goal } from './GoalItem';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="mt-2 mb-2">
      {/* Durchschnittlicher Fortschritt */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-navy text-lg">Durchschnittlicher Fortschritt</h3>
            <p className="text-3xl font-bold text-navy">
              {averageProgress}%
            </p>
          </div>
          {/* Changed from oval to fully round circle */}
          <div className="w-16 h-16 rounded-full border-4 border-navy flex items-center justify-center">
            <span className="text-xl font-bold text-navy">{goals.length}/5</span>
          </div>
        </div>
      </div>
      
      {/* Serien (Streaks) */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Calendar className="h-6 w-6 text-navy mb-1" />
            <p className="text-sm text-muted-foreground">Aktuelle Serie</p>
            <p className="text-2xl font-bold text-navy">{currentStreak}</p>
            <p className="text-xs text-muted-foreground">Tage</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <CalendarCheck className="h-6 w-6 text-navy mb-1" />
            <p className="text-sm text-muted-foreground">Beste Serie</p>
            <p className="text-2xl font-bold text-navy">{bestStreak}</p>
            <p className="text-xs text-muted-foreground">Tage</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Progress steps */}
      <div className="space-y-4">
        {progressSteps.map((step, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-navy">{step.title}</span>
              <span className="font-medium">{step.completedSteps}/{step.totalSteps}</span>
            </div>
            <div className="flex items-center space-x-2">
              {Array.from({ length: step.totalSteps }).map((_, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${i < step.completedSteps ? 'bg-navy' : 'bg-gray-200'}`}>
                    {i < step.completedSteps && <Check className="w-4 h-4 text-white" />}
                  </div>
                  {i < step.totalSteps - 1 && (
                    <div className="flex-1 h-1 bg-gray-200">
                      <div 
                        className="h-full bg-navy" 
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
