
import React from 'react';
import { Plus } from 'lucide-react';

const KnowledgeSection: React.FC = () => {
  return (
    <section className="mt-8 pb-20">
      <h2 className="text-2xl font-bold text-primary mb-4">Wissen</h2>
      
      <div className="relative">
        <div className="bg-white rounded-full p-2 shadow-lg max-w-full mx-auto aspect-square overflow-hidden border-4 border-green-100">
          <div className="w-full h-full rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 relative">
            {/* Food groups in the plate */}
            <div className="relative bg-green-100 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Vegetables" className="w-full h-full object-cover opacity-90" />
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            <div className="relative bg-yellow-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm font-medium text-primary">Kohlenhydrate</p>
              </div>
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            <div className="relative bg-red-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm font-medium text-primary">Proteine</p>
              </div>
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                <Plus className="w-4 h-4 text-primary" />
              </button>
            </div>
            <div className="relative bg-purple-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm font-medium text-primary">Fette</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-primary">Ernährungstipps</h3>
        <p className="text-sm text-gray-600 mt-1">
          Ausgewogene Ernährung ist wichtig für Ihre Rehabilitation. Achten Sie auf ausreichend Proteine, gesunde Fette und komplexe Kohlenhydrate.
        </p>
        <button className="mt-2 text-sm text-accent font-medium">Mehr erfahren</button>
      </div>
    </section>
  );
};

export default KnowledgeSection;
