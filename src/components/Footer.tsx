
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-netcore-purple text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Netcore Annual Revenue Meet 2025</h3>
            <p className="text-gray-300">Join us in Bangkok for an unforgettable experience focused on Growth, AI, and Netcore.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Agenda", "Guidelines", "Code of Conduct", "Contact", "Resources"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/netcorecloud" target="_blank" rel="noopener noreferrer" className="hover:text-netcore-gold transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com/netcorecloud" target="_blank" rel="noopener noreferrer" className="hover:text-netcore-gold transition-colors">
                <Twitter />
              </a>
              <a href="https://linkedin.com/company/netcorecloud" target="_blank" rel="noopener noreferrer" className="hover:text-netcore-gold transition-colors">
                <Linkedin />
              </a>
              <a href="https://instagram.com/netcorecloud" target="_blank" rel="noopener noreferrer" className="hover:text-netcore-gold transition-colors">
                <Instagram />
              </a>
            </div>
            <p className="text-gray-300">Contact: <a href="mailto:skocommittee@netcorecloud.com" className="hover:text-netcore-gold">skocommittee@netcorecloud.com</a></p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 Netcore Cloud Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Thank you for being a part of our growth journey. Together, we GAIN.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
