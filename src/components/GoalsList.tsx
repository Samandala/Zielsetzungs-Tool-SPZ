
import React, { useState } from 'react';
import GoalItem, { Goal } from './GoalItem';
import { Plus, BarChart2, Calendar, Coffee, AlarmClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Switch } from '@/components/ui/switch';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface GoalsListProps {
  goals: Goal[];
  onUpdateProgress: (id: string, newProgress: number) => void;
  onAddGoal: () => void;
}

const GoalsList: React.FC<GoalsListProps> = ({ goals, onUpdateProgress, onAddGoal }) => {
  const isMobile = useIsMobile();
  const [reminders, setReminders] = useState<{day: string, time: string, active: boolean}[]>([
    { day: 'Mon', time: '09:00 Uhr', active: true },
    { day: 'Wed', time: '13:00 Uhr', active: true },
  ]);
  const [showReminderDrawer, setShowReminderDrawer] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [selectedTime, setSelectedTime] = useState('9:00');
  
  // German day name mapping
  const dayNameMap: Record<string, string> = {
    'Mon': 'Mo',
    'Tue': 'Di',
    'Wed': 'Mi',
    'Thu': 'Do', 
    'Fri': 'Fr',
    'Sat': 'Sa',
    'Sun': 'So'
  };
  
  const addReminder = () => {
    const newReminder = {
      day: selectedDay,
      time: selectedTime,
      active: true
    };
    setReminders([...reminders, newReminder]);
    setShowReminderDrawer(false);
  };
  
  const toggleReminderActive = (index: number) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].active = !updatedReminders[index].active;
    setReminders(updatedReminders);
  };
  
  return (
    <section className="mt-4 md:mt-6">
      {/* Motivation quote with enhanced styling - MOVED UP */}
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-navy/10 to-navy/5 rounded-xl shadow-sm border-l-4 border-navy">
        <p className="text-sm italic text-navy font-medium">
          "Jede Bewegung bringt dich deinem neuen Ich näher - egal wie klein der Schritt ist."
        </p>
      </div>
      
      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4 w-full">
          <TabsTrigger value="progress">Fortschritt</TabsTrigger>
          <TabsTrigger value="calendar">Kalender</TabsTrigger>
          <TabsTrigger value="calories">Kalorien</TabsTrigger>
          <TabsTrigger value="reminder">Reminder</TabsTrigger>
        </TabsList>
        
        <TabsContent value="progress" className="space-y-3 md:space-y-4">
          <div className="flex justify-between items-center mb-3">
            <Button 
              onClick={onAddGoal} 
              variant="outline" 
              size="sm" 
              className="rounded-full h-8 w-8 p-0 flex items-center justify-center border-primary text-primary ml-auto"
            >
              <Plus size={18} />
            </Button>
          </div>
          
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
                    <span>1500 kcal</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bereits gegessen</span>
                    <span>1100 kcal</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Noch verfügbar</span>
                    <span>400 kcal</span>
                  </div>
                </div>
                
                <div className="w-full bg-muted h-3 md:h-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: '73%' }}
                  ></div>
                </div>
                
                <Button className="w-full">Mahlzeit hinzufügen</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reminder">
          <Card className="shadow-sm">
            <CardContent className="p-3 md:p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-primary">Reminder</h3>
                <Drawer open={showReminderDrawer} onOpenChange={setShowReminderDrawer}>
                  <DrawerTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full h-8 w-8 p-0 flex items-center justify-center border-primary text-primary"
                    >
                      <Plus size={18} />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Reminder erstellen</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 pt-0">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Wochentag auswählen</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {Object.entries(dayNameMap).map(([eng, ger]) => (
                            <Button 
                              key={eng}
                              variant={selectedDay === eng ? "default" : "outline"} 
                              className="text-sm py-1"
                              onClick={() => setSelectedDay(eng)}
                            >
                              {ger}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2">Uhrzeit auswählen</h4>
                        <div className="flex space-x-2 items-center">
                          <Input 
                            type="time" 
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setShowReminderDrawer(false)}>
                          Abbrechen
                        </Button>
                        <Button onClick={addReminder}>
                          Speichern
                        </Button>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
              
              <div className="space-y-3">
                {reminders.map((reminder, index) => (
                  <div key={index} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-navy text-white p-2 rounded-full mr-3">
                        <AlarmClock size={20} />
                      </div>
                      <div>
                        <p className="text-navy font-medium">{dayNameMap[reminder.day]}</p>
                        <p className="text-sm text-gray-500">{reminder.time}</p>
                      </div>
                    </div>
                    <Switch 
                      checked={reminder.active}
                      onCheckedChange={() => toggleReminderActive(index)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default GoalsList;
