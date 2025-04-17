
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { Download, Calendar, DollarSign, Smartphone, Thermometer, CheckSquare, Map } from 'lucide-react';

const Guidelines = () => {
  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50">
        <section className="py-16 bg-netcore-purple">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Travel Guidelines</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Everything you need to know for a smooth journey to Bangkok for GAIN 2025.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-netcore-purple mb-2">
                    Essential Travel Information
                  </h2>
                  <p className="text-gray-600 mb-4 md:mb-0">
                    Please review all guidelines carefully and download the complete Code of Conduct for detailed information.
                  </p>
                </div>
                
                <a 
                  href="/placeholder-code-of-conduct.pdf" 
                  download="GAIN2025_Code_of_Conduct.pdf"
                  className="inline-flex items-center px-4 py-2 bg-netcore-purple text-white rounded-md hover:bg-netcore-purple/90 transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Full Document
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <InfoCard 
                icon={<Calendar size={24} />}
                title="Event Dates"
                description={
                  <div>
                    <p className="mb-2">Official travel period: April 24-26, 2025</p>
                    <p>All participants are expected to arrive in Bangkok by the evening of April 23rd and depart no earlier than April 27th morning.</p>
                  </div>
                }
              />
              
              <InfoCard 
                icon={<DollarSign size={24} />}
                title="Currency & Exchange"
                description={
                  <div>
                    <p className="mb-2">The local currency is Thai Baht (THB).</p>
                    <p className="mb-2">Exchange your currency at the airport for better rates.</p>
                    <p>Any amount exceeding USD 3,000 must be declared at customs.</p>
                  </div>
                }
              />
              
              <InfoCard 
                icon={<Smartphone size={24} />}
                title="Mobile Connectivity"
                description={
                  <div>
                    <p className="mb-2">Enable international roaming before departure.</p>
                    <p className="mb-2">Major carriers like AIS, True Move, and DTAC offer tourist SIM cards at the airport.</p>
                    <p>Hotel and event venues will provide free Wi-Fi.</p>
                  </div>
                }
              />
              
              <InfoCard 
                icon={<Thermometer size={24} />}
                title="Weather & Clothing"
                description={
                  <div>
                    <p className="mb-2">Bangkok is hot and humid (35-40°C / 95-104°F).</p>
                    <p className="mb-2">Pack light, breathable clothing for daytime and smart casual attire for evening events.</p>
                    <p>Don't forget sun protection and stay hydrated!</p>
                  </div>
                }
              />
              
              <InfoCard 
                icon={<CheckSquare size={24} />}
                title="Travel Checklist"
                description={
                  <div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Valid passport (minimum 6 months validity)</li>
                      <li>Netcore ID card</li>
                      <li>Travel insurance details</li>
                      <li>Universal travel adapter</li>
                      <li>Necessary medications</li>
                      <li>Business cards</li>
                      <li>Emergency contact numbers</li>
                    </ul>
                  </div>
                }
              />
              
              <InfoCard 
                icon={<Map size={24} />}
                title="Airport Transfers"
                description={
                  <div>
                    <p className="mb-2">All airport transfers will be managed by the Netcore SKO Committee.</p>
                    <p className="mb-2">Look for Netcore representatives at the arrival terminal.</p>
                    <p>Details about pickup locations will be shared closer to the event date.</p>
                  </div>
                }
              />
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-netcore-purple mb-6">Suvarnabhumi Airport & Venue Location</h2>
              
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7271438494427!2d100.75054157476756!3d13.681833497950902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d67e78b93362b%3A0xf0100b33d0bd6de0!2sSuvarnabhumi%20Airport!5e0!3m2!1sen!2sus!4v1700268462971!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Map of Suvarnabhumi Airport, Bangkok"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-netcore-purple mb-4">Additional Travel Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Transportation in Bangkok</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>The BTS Skytrain and MRT subway are convenient ways to navigate the city.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Use official taxis (with meters) or ride-sharing apps like Grab.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Tuk-tuks are a fun experience but negotiate the fare before boarding.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Health & Safety</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Drink only bottled water and be cautious with street food.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Bangkok is generally safe, but be aware of your surroundings in crowded areas.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Save the SKO Committee contact number in your phone for emergencies.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Guidelines;
