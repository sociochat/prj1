import { Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Mamta Waterproofing</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Your trusted partner for all waterproofing solutions since 1991.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</Link>
              <Link to="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link>
              <Link to="/clients" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Clients</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Terrace Waterproofing</p>
              <p className="text-gray-400">Bathroom Waterproofing</p>
              <p className="text-gray-400">Water Tank Solutions</p>
              <p className="text-gray-400">China Mosaic Fixing</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Bandra (E), Mumbai</p>
              <a href="tel:9322290414" className="block text-gray-400 hover:text-cyan-400 transition-colors">9322290414</a>
              <a href="mailto:mamtawaterproofing@yahoo.com" className="block text-gray-400 hover:text-cyan-400 transition-colors break-all">mamtawaterproofing@yahoo.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mamta Waterproofing. All rights reserved. | GST: 27ADSPJ9975R1ZE</p>
        </div>
      </div>
    </footer>
  );
}
