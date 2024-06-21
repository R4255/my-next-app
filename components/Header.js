// components/Header.js
import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-2xl font-bold">FintechCo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="text-white">Features</Link></li>
            <li><Link href="#about" className="text-white">About</Link></li>
            <li><Link href="#contact" className="text-white">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
