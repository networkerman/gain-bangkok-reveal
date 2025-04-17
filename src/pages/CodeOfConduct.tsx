
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AcknowledgmentForm from '../components/AcknowledgmentForm';
import GuidelineCard from '../components/GuidelineCard';
import { Download } from 'lucide-react';

const CodeOfConduct = () => {
  const doItems = [
    "Represent Netcore positively, upholding our values and professional standards at all times.",
    "Dress in smart casual attire for all business sessions (formal attire for the Gala Dinner).",
    "Be punctual for all scheduled events and meetings as per the agenda.",
    "Attend all mandatory sessions and actively participate in discussions and activities.",
    "Stay hydrated and take necessary health precautions in Bangkok's hot and humid climate.",
    "Respect local Thai customs and cultural sensitivities during your stay.",
    "Use the event as an opportunity to network and build relationships with colleagues.",
    "Keep your ID badge visible at all times during official event activities."
  ];

  const avoidItems = [
    "Behavior that could be considered offensive, discriminatory, or disrespectful to colleagues or locals.",
    "Excessive consumption of alcohol or intoxication during official event activities.",
    "Littering or damaging property at the venue or in public places.",
    "Sharing confidential company information with unauthorized individuals.",
    "Posting negative content about the event or company on social media platforms.",
    "Missing mandatory sessions without proper authorization from your manager.",
    "Engaging in activities that could put you or others at risk or harm.",
    "Arranging personal sightseeing that conflicts with the official event schedule."
  ];

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50">
        <section className="py-16 bg-netcore-purple">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Code of Conduct</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Guidelines for professional conduct during the Netcore Annual Revenue Meet 2025.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-netcore-purple mb-2">
                    Event Code of Conduct
                  </h2>
                  <p className="text-gray-600 mb-4 md:mb-0">
                    All participants are required to follow these guidelines throughout the event.
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <GuidelineCard 
                title="Things to Do"
                items={doItems}
                type="do"
              />
              
              <GuidelineCard 
                title="Things to Avoid"
                items={avoidItems}
                type="avoid"
              />
            </div>
            
            <div className="mb-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-xl font-bold text-netcore-purple mb-4">Important Notice</h3>
              <p className="text-gray-700 mb-4">
                Failure to adhere to this Code of Conduct may result in disciplinary action, including potential:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Removal from specific event activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Early return to your home location at your own expense</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Additional disciplinary measures as determined by HR and management</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                All participants are required to submit a digital acknowledgment of this Code of Conduct using the form below.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-netcore-purple mb-6">Digital Acknowledgment</h2>
              <AcknowledgmentForm />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-netcore-purple mb-4">Additional Guidelines</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Sensitivity</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Thailand is known as the "Land of Smiles" - maintain a positive, friendly demeanor.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Avoid raising your voice or showing frustration publicly (concept of "losing face").</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Remove shoes when entering temples or some traditional establishments.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Social Media Guidelines</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Feel free to share positive experiences using #NetcoreGAIN2025 and #NetcoreThailand.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Avoid posting confidential information, presentation content, or strategy details.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-netcore-gold mr-2">•</span>
                      <span>Obtain permission before posting photos of colleagues or venues.</span>
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

export default CodeOfConduct;
