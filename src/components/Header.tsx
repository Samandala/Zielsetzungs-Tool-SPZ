
import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-white flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        <div className="text-navy flex items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10H25V15H30V30H15V25H10V10Z" fill="#003b71" />
            <path d="M17.5 15V20H22.5V25H17.5V30H12.5V15H17.5Z" fill="#003b71" />
          </svg>
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
        <User size={20} className="text-gray-500" />
      </button>
    </header>
  );
};

export default Header;
