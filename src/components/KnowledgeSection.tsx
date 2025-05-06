
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const KnowledgeSection: React.FC = () => {
  return (
    <section className="mt-8 pb-20">
      <h2 className="text-2xl font-bold text-primary mb-4">Wissen</h2>
      
      <div className="relative mb-6">
        <div className="bg-white rounded-full p-3 shadow-lg max-w-full mx-auto aspect-square overflow-hidden border-4 border-green-100">
          {/* Use the image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img 
              src="/public/lovable-uploads/3a2d0022-95c2-46cb-aa45-5f6c5f06b791.png" 
              alt="Tellermodell" 
              className="w-full h-full object-cover"
            />
            
            {/* Add button on top of image */}
            <button className="absolute bottom-6 left-6 bg-green-700 rounded-full p-1.5 shadow-md z-10">
              <Plus className="w-5 h-5 text-white" />
            </button>
            
            <button className="absolute top-6 right-6 bg-green-700 rounded-full p-1.5 shadow-md z-10">
              <Plus className="w-5 h-5 text-white" />
            </button>
            
            <button className="absolute bottom-6 right-6 bg-green-700 rounded-full p-1.5 shadow-md z-10">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-semibold text-primary">Das Tellermodell</h3>
          <p className="text-sm text-gray-600 mt-1">
            Das Tellermodell hilft bei der ausgewogenen Mahlzeitenplanung. Ein idealer Teller enthält:
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-5">
            <li>1/2 Gemüse und Obst</li>
            <li>1/4 Kohlenhydrate (Kartoffeln, Reis, Pasta)</li>
            <li>1/4 Proteine (Fleisch, Fisch, Ei, Tofu)</li>
          </ul>
          <Button variant="link" className="mt-2 text-sm text-accent font-medium p-0">
            Mehr erfahren
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default KnowledgeSection;
