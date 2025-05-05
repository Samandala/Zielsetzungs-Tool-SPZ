
import React from 'react';
import { Plus, Salad, Wheat, Beef, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const KnowledgeSection: React.FC = () => {
  return (
    <section className="mt-8 pb-20">
      <h2 className="text-2xl font-bold text-primary mb-4">Wissen</h2>
      
      <div className="relative mb-6">
        <div className="bg-white rounded-full p-3 shadow-lg max-w-full mx-auto aspect-square overflow-hidden border-4 border-green-100">
          <div className="w-full h-full rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 relative">
            {/* Vegetables - Green section */}
            <div className="relative bg-green-100 flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Salad className="w-10 h-10 text-green-800 mb-1" />
                <p className="text-xs font-medium text-green-800">Gemüse</p>
              </div>
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md z-10">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            
            {/* Carbohydrates - Yellow section */}
            <div className="relative bg-yellow-100 flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Wheat className="w-10 h-10 text-yellow-700 mb-1" />
                <p className="text-xs font-medium text-yellow-700">Kohlenhydrate</p>
              </div>
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md z-10">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            
            {/* Protein - Pink section */}
            <div className="relative bg-pink-100 flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Beef className="w-10 h-10 text-pink-700 mb-1" />
                <p className="text-xs font-medium text-pink-700">Proteine</p>
              </div>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            
            {/* Fruits - Light green section */}
            <div className="relative bg-lime-100 flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <Apple className="w-10 h-10 text-lime-700 mb-1" />
                <p className="text-xs font-medium text-lime-700">Obst</p>
              </div>
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
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
            <li>1/2 Gemüse und Salat</li>
            <li>1/4 Kohlenhydrate (Kartoffeln, Reis, Pasta)</li>
            <li>1/4 Proteine (Fleisch, Fisch, Ei, Tofu)</li>
            <li>Eine Portion Obst als Nachtisch</li>
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
