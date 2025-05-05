
import React from 'react';
import { Check } from 'lucide-react';
import { Goal } from './GoalItem';

interface GoalProgressProps {
  goals: Goal[];
}

const GoalProgress: React.FC<GoalProgressProps> = ({ goals }) => {
  // Calculate progress steps from goals
  const progressSteps = [
    { title: "Beweglichkeit", completedSteps: 2, totalSteps: 4 },
    { title: "Ernährung", completedSteps: 3, totalSteps: 3 },
    { title: "Kognitive Übungen", completedSteps: 2, totalSteps: 4 },
  ];
  
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-primary mb-4">Fortschritt</h2>
      
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
