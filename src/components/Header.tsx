
import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-white flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <div className="text-navy flex items-center">
          <img 
            src="/lovable-uploads/d6e6b0a6-f552-4e2d-aabd-dc416339b163.png" 
            alt="Health Portal Logo" 
            className="h-10"
          />
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
        <User size={20} className="text-gray-500" />
      </button>
    </header>
  );
};

export default Header;
