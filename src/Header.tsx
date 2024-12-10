import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-500 to-purple-300 text-black py-4 fixed top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Pasteles D´Lu</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Volver al Registro
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;