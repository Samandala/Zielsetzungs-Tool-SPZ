
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-green-100 flex justify-between items-center rounded-b-3xl shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-primary">Meine Ziele</h1>
        <p className="text-sm text-muted-foreground">Individuelle Zielsetzung</p>
      </div>
    </header>
  );
};

export default Header;
