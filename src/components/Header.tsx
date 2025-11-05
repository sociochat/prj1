import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/mamtawat-lgoo-removebg-preview copy.png"
              alt="Mamta Waterproofing Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Mamta Waterproofing</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Since 1991</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors font-medium`}>Home</Link>
            <Link to="/services" className={`${isActive('/services') ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors font-medium`}>Services</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors font-medium`}>About</Link>
            <Link to="/clients" className={`${isActive('/clients') ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors font-medium`}>Clients</Link>
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-all shadow-md hover:shadow-lg">Contact Us</Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-left px-4 py-2 ${isActive('/') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>Home</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`text-left px-4 py-2 ${isActive('/services') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>Services</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`text-left px-4 py-2 ${isActive('/about') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>About</Link>
              <Link to="/clients" onClick={() => setMobileMenuOpen(false)} className={`text-left px-4 py-2 ${isActive('/clients') ? 'bg-cyan-50 text-cyan-600' : 'text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>Clients</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-left px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
