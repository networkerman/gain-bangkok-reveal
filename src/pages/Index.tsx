import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, MapPin, FileText, Mail } from 'lucide-react';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-netcore-purple/80 to-netcore-purple/50"></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <motion.div 
            className="max-w-3xl animate-fade-in flex flex-col items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute top-4 left-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/lovable-uploads/d6970007-2ab7-4073-9098-d94ee5012b0f.png" 
                alt="Netcore Logo" 
                className="h-16 md:h-24"
              />
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-2 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Annual Revenue Meet 2025-26 • Bangkok
            </motion.h2>
            <motion.p 
              className="text-white text-xl mb-6 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              April 24-26, 2025
            </motion.p>
            
            <CountdownTimer />
            
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/agenda" 
                className="bg-netcore-gold text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-netcore-gold/90 transition-colors inline-flex items-center"
              >
                Explore Event Details
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* GAIN Theme Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-netcore-purple mb-4">About GAIN 2025</h2>
            <p className="text-gray-700 text-lg">
              Join us in Bangkok for our Annual Revenue Meet, where we'll focus on our core pillars for 2025 and beyond: 
              Growth, AI, and Netcore's transformative journey.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">G</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">Growth</h3>
              <p className="text-gray-700">
                Strategies for accelerating revenue growth, expanding market reach, and scaling our impact globally.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">A</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">AI</h3>
              <p className="text-gray-700">
                Leveraging artificial intelligence to enhance our products, improve customer experiences, and drive innovation.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="text-4xl font-extrabold text-netcore-gold mb-4">N</div>
              <h3 className="text-xl font-bold text-netcore-purple mb-2">Netcore</h3>
              <p className="text-gray-700">
                Our people, our culture, and our collective journey toward becoming a global leader in customer communication.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Quick Links Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-netcore-purple mb-12 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Essential Information
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
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
            </motion.div>
            
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Bangkok Showcase */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-netcore-purple mb-4">
                Experience Bangkok
              </h2>
              <p className="text-gray-700 mb-6">
                Immerse yourself in the vibrant culture, stunning architecture, and unforgettable experiences of Thailand's capital city during our Annual Revenue Meet.
              </p>
              <ul className="space-y-3 mb-6">
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Experience the warm Thai hospitality and rich cultural heritage</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Enjoy modern luxury accommodations with world-class amenities</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-netcore-gold mr-2">✓</span>
                  <span className="text-gray-700">Network with colleagues in one of Asia's most dynamic cities</span>
                </motion.li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/guidelines"
                  className="text-netcore-purple font-semibold hover:text-netcore-gold transition-colors inline-flex items-center"
                >
                  View Travel Guidelines
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </>
  );
};

export default Index;
