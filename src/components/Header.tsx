
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-green-100 flex justify-between items-center rounded-b-3xl shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-primary">Meine Reha-Ziele</h1>
        <p className="text-sm text-muted-foreground">Individuelle Zielsetzung</p>
      </div>
      <div>
        <img 
          src="/lovable-uploads/611c651e-6471-423b-9893-95537ab25365.png" 
          alt="Logo" 
          className="h-10 w-auto object-contain" 
        />
      </div>
    </header>
  );
};

export default Header;
