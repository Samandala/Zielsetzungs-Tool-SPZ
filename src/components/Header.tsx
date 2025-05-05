
import React from 'react';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-green-100 flex justify-between items-center rounded-b-3xl shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-primary">Meine Ziele</h1>
        <p className="text-sm text-muted-foreground">Individuelle Zielsetzung</p>
      </div>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50">
        <MoreHorizontal size={18} className="text-primary" />
      </button>
    </header>
  );
};

export default Header;
