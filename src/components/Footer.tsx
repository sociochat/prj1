import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="h-12 w-12">
                <ImageWithLoader
                  src="/image.png"
                  alt="Mamta Waterproofing Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Mamta Waterproofing</h3>
            </Link>
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
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">Terrace Waterproofing</Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">Bathroom & WC Waterproofing</Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">Water Tank Waterproofing</Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">China Mosaic Fixing</Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">PU Grouting</Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">PU Coating</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Bandra (E), Mumbai</p>
              <a href="tel:9322290414" className="block text-gray-400 hover:text-cyan-400 transition-colors">9322290414</a>
              <a href="mailto:mamtawaterproofing@yahoo.com" className="block text-gray-400 hover:text-cyan-400 transition-colors break-all">mamtawaterproofing@yahoo.com</a>
              <a href="mailto:navin.j@mamtawaterpoofing.com" className="block text-gray-400 hover:text-cyan-400 transition-colors break-all">navin.j@mamtawaterpoofing.com</a>
              <a href="mailto:ramchandra.j@mamtawaterproofing.com" className="block text-gray-400 hover:text-cyan-400 transition-colors break-all">ramchandra.j@mamtawaterproofing.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Mamta Waterproofing. All rights reserved. | GST: 27ADFPJ9975R1ZE</p>
        </div>
      </div>
    </footer>
  );
}
