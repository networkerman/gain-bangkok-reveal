
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { FileText, Phone, Building, Map, Info } from 'lucide-react';

const Resources = () => {
  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50">
        <section className="py-16 bg-netcore-purple">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Resources</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Downloadable materials and information to help you prepare for the event.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-netcore-purple mb-6">Downloadable Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <ResourceCard 
                title="Code of Conduct"
                description="Complete guidelines for professional behavior during the GAIN 2025 event."
                downloadUrl="/placeholder-code-of-conduct.pdf"
                fileName="GAIN2025_Code_of_Conduct.pdf"
                icon={<FileText size={24} />}
              />
              
              <ResourceCard 
                title="Emergency Contacts"
                description="Important phone numbers and contact information for your stay in Bangkok."
                downloadUrl="/placeholder-emergency-contacts.pdf"
                fileName="GAIN2025_Emergency_Contacts.pdf"
                icon={<Phone size={24} />}
              />
              
              <ResourceCard 
                title="Hotel Information"
                description="Details about accommodations, amenities, and services available at the event venue."
                downloadUrl="/placeholder-hotel-info.pdf"
                fileName="GAIN2025_Hotel_Information.pdf"
                icon={<Building size={24} />}
              />
            </div>
            
            <h2 className="text-2xl font-bold text-netcore-purple mb-6">Tips for Bangkok</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                    <Map size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-netcore-purple">Cultural Etiquette</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Greetings</h4>
                    <p>
                      The traditional Thai greeting is the "wai" - pressing your palms together at chest level and slightly bowing your head. 
                      It's a sign of respect, though a handshake is also acceptable in business settings.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Communication</h4>
                    <p>
                      Thais value calm, measured communication. Avoid raising your voice or showing frustration in public. 
                      The concept of "saving face" is important, so public criticism should be avoided.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Respect for Royalty</h4>
                    <p>
                      The Thai royal family is deeply respected. Never make negative comments about the monarchy, 
                      as it's not only culturally insensitive but also against Thai law.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Temple Etiquette</h4>
                    <p>
                      If visiting temples, dress modestly (shoulders and knees covered), remove shoes before entering, 
                      and never point your feet toward Buddha images.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                    <Info size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-netcore-purple">Practical Tips</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Recommended Attire</h4>
                    <p>
                      Pack light, breathable clothing for Bangkok's hot climate. Business casual is appropriate for all event 
                      sessions, with formal attire required for the Gala Dinner. Don't forget comfortable walking shoes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Health Precautions</h4>
                    <p>
                      Stay hydrated, use sun protection, and be cautious with street food. Stick to bottled water and 
                      reputable food establishments to avoid stomach issues.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Social Media Usage</h4>
                    <p>
                      Share your positive experiences using the official event hashtags: #NetcoreGAIN2025 and #NetcoreThailand. 
                      Remember to be mindful of company confidentiality when posting.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Shopping & Souvenirs</h4>
                    <p>
                      Bangkok is famous for its markets and shopping malls. Polite haggling is expected in markets, 
                      but fixed prices are the norm in department stores and malls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-netcore-purple mb-4">Additional Resources</h3>
              <p className="text-gray-700 mb-4">
                For further information and preparation for your trip to Bangkok, consider exploring these resources:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <div>
                    <a 
                      href="https://www.tourismthailand.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-netcore-purple hover:text-netcore-gold font-medium"
                    >
                      Tourism Authority of Thailand
                    </a>
                    <p className="text-sm mt-1">Official tourism information and travel guides.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <div>
                    <a 
                      href="https://www.bangkokair.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-netcore-purple hover:text-netcore-gold font-medium"
                    >
                      Bangkok Airways
                    </a>
                    <p className="text-sm mt-1">Information about flights to and within Thailand.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <div>
                    <a 
                      href="https://www.bts.co.th/eng/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-netcore-purple hover:text-netcore-gold font-medium"
                    >
                      BTS Skytrain
                    </a>
                    <p className="text-sm mt-1">Bangkok's elevated rapid transit system map and information.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <div>
                    <a 
                      href="https://www.xe.com/currencyconverter/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-netcore-purple hover:text-netcore-gold font-medium"
                    >
                      XE Currency Converter
                    </a>
                    <p className="text-sm mt-1">Real-time currency conversion rates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Resources;
