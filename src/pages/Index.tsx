import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, MapPin, FileText, Mail } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-netcore-purple/80 to-netcore-purple/50"></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl animate-fade-in flex flex-col items-center">
            <img 
              src="/lovable-uploads/81b146f0-8a93-400d-bdd9-7edbbf6ac6a2.png" 
              alt="GAIN 2025 Logo" 
              className="mb-6 max-w-full h-auto md:max-w-xl"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
              Annual Revenue Meet 2025-26 • Bangkok
            </h2>
            <p className="text-white text-xl mb-6 text-center">April 24-26, 2025</p>
            
            <CountdownTimer />
            
            <div className="mt-8">
              <Link 
                to="/agenda" 
                className="bg-netcore-gold text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-netcore-gold/90 transition-colors inline-flex items-center"
              >
                Explore Event Details
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* GAIN Theme Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-netcore-purple mb-4">About GAIN 2025</h2>
            <p className="text-gray-700 text-lg">
              Join us in Bangkok for our Annual Revenue Meet, where we'll focus on our core pillars for 2025 and beyond: 
              Growth, AI, Innovation, and Netcore's transformative journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">G</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">Growth</h3>
              <p className="text-gray-700">
                Strategies for accelerating revenue growth, expanding market reach, and scaling our impact globally.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">A</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">AI</h3>
              <p className="text-gray-700">
                Leveraging artificial intelligence to enhance our products, improve customer experiences, and drive innovation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">I</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">Innovation</h3>
              <p className="text-gray-700">
                Breaking new ground with innovative solutions, fresh perspectives, and creative approaches to market challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">N</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">Netcore</h3>
              <p className="text-gray-700">
                Our people, our culture, and our collective journey toward becoming a global leader in customer communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-netcore-purple mb-12 text-center">
            Essential Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/agenda"
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="p-4 bg-netcore-purple bg-opacity-10 rounded-full mr-6 text-netcore-purple">
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-netcore-purple mb-2">Event Agenda</h3>
                <p className="text-gray-700 mb-2">
                  Explore the three-day schedule of keynotes, sessions, and team activities.
                </p>
                <span className="text-netcore-gold flex items-center">
                  View Schedule <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/guidelines"
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="p-4 bg-netcore-purple bg-opacity-10 rounded-full mr-6 text-netcore-purple">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-netcore-purple mb-2">Travel Guidelines</h3>
                <p className="text-gray-700 mb-2">
                  Important information about travel, accommodation, and Bangkok essentials.
                </p>
                <span className="text-netcore-gold flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/code-of-conduct"
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="p-4 bg-netcore-purple bg-opacity-10 rounded-full mr-6 text-netcore-purple">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-netcore-purple mb-2">Code of Conduct</h3>
                <p className="text-gray-700 mb-2">
                  Guidelines for professional conduct and behavior during the event.
                </p>
                <span className="text-netcore-gold flex items-center">
                  Read Guidelines <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
            
            <Link 
              to="/contact"
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start"
            >
              <div className="p-4 bg-netcore-purple bg-opacity-10 rounded-full mr-6 text-netcore-purple">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-netcore-purple mb-2">Contact & Support</h3>
                <p className="text-gray-700 mb-2">
                  Get in touch with the SKO Committee for any questions or assistance.
                </p>
                <span className="text-netcore-gold flex items-center">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Bangkok Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-netcore-purple mb-4">
                Experience Bangkok
              </h2>
              <p className="text-gray-700 mb-6">
                Immerse yourself in the vibrant culture, stunning architecture, and unforgettable experiences of Thailand's capital city during our Annual Revenue Meet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Experience the warm Thai hospitality and rich cultural heritage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Enjoy modern luxury accommodations with world-class amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Network with colleagues in one of Asia's most dynamic cities</span>
                </li>
              </ul>
              <Link 
                to="/guidelines"
                className="text-netcore-purple font-semibold hover:text-netcore-gold transition-colors inline-flex items-center"
              >
                View Travel Guidelines
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Bangkok Skyline"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
