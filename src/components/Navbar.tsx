import { Link } from 'react-router-dom';
import { Settings, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <div>
        <Link to="/entries" className="text-white mr-4">Entries</Link>
        <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
      </div>
      <div className="flex items-center">
        <Link to="/settings" className="text-white mr-4">
          <Settings size={24} />
        </Link>
        <button onClick={toggleTheme} className="text-white">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;