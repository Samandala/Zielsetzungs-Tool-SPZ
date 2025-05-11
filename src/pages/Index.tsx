
import React, { useState } from 'react';
import Header from '../components/Header';
import GoalsList from '../components/GoalsList';
import GoalProgress from '../components/GoalProgress';
import { Coffee } from 'lucide-react';
import { Goal } from '../components/GoalItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Wenn ich um 8 Uhr mein Frühstück gegessen habe, dann mache ich 10 Minuten Krafttraining mit dem Theraband',
      category: 'fitness',
      progress: 75,
      icon: '🏋️',
      frequency: '3x pro Woche',
    },
    {
      id: '2',
      title: 'Ich esse an mindestens 5 von 7 Tagen zum Mittagessen eine Gemüseportion nach dem Tellermodell.',
      category: 'nutrition',
      progress: 40,
      icon: '🍎',
      frequency: 'Täglich',
    },
    {
      id: '3',
      title: 'Ich trinke diese Woche keine Süssgetränke, sondern nur Wasser oder ungesüssten Tee.',
      category: 'mental',
      progress: 60,
      icon: '☕',
      frequency: '4x pro Woche',
    },
    {
      id: '4',
      title: 'Ich probiere diese Woche eine neue Sportart aus dem SPZ-Angebot',
      category: 'fitness',
      progress: 85,
      icon: '🧘',
      frequency: 'Diese Woche',
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUpdateProgress = (id: string, newProgress: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, progress: newProgress } : goal
    ));
  };

  const handleAddGoal = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container px-4 mx-auto pb-24">
        <GoalsList 
          goals={goals} 
          onUpdateProgress={handleUpdateProgress}
          onAddGoal={handleAddGoal}
        />
        
        <GoalProgress goals={goals} />
      </main>

      {/* Dialog for adding new goals */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Neues Ziel hinzufügen</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="goal-name" className="text-right">
                Name
              </label>
              <Input
                id="goal-name"
                placeholder="Ziel eingeben"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="category" className="text-right">
                Kategorie
              </label>
              <select
                id="category"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                <option value="sport">Sport</option>
                <option value="ernährung">Ernährung</option>
                <option value="wissen">Wissen</option>
                <option value="motivation">Motivation</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="frequency" className="text-right">
                Häufigkeit
              </label>
              <Input
                id="frequency"
                placeholder="z.B. 3x pro Woche"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="icon" className="text-right">
                Icon
              </label>
              <div className="col-span-3 flex gap-2">
                <Button variant="outline" size="icon">🏋️</Button>
                <Button variant="outline" size="icon">🍎</Button>
                <Button variant="outline" size="icon">☕</Button>
                <Button variant="outline" size="icon">🧘</Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleDialogClose}>Ziel hinzufügen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
