
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, Globe, MapPin, HelpCircle } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: "What if I haven't received my flight tickets yet?",
      answer: "Please contact the SKO Committee immediately at skocommittee@netcorecloud.com or call Manisha Thakore at +91 9821186031."
    },
    {
      question: "What should I do if I have dietary restrictions?",
      answer: "Please notify the SKO Committee at least two weeks before the event to ensure accommodations can be made for all meals."
    },
    {
      question: "Is there a dress code for the event?",
      answer: "Business casual attire is recommended for all daytime sessions. The Gala Dinner requires formal attire. Pack light, breathable clothing due to Bangkok's hot climate."
    },
    {
      question: "What if I need to arrive late or leave early?",
      answer: "Any deviations from the official schedule must be approved by your manager and communicated to the SKO Committee in advance."
    },
    {
      question: "Will there be free time to explore Bangkok?",
      answer: "There is limited free time built into the schedule. The evening of April 25th is designated as free time for team dinners and city exploration."
    }
  ];

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50">
        <section className="py-16 bg-netcore-purple">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact & Support</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Get in touch with the SKO Committee for any questions or assistance.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                  <h2 className="text-2xl font-bold text-netcore-purple mb-6">SKO Committee Contact</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Manisha Thakore: <a href="tel:+919821186031" className="text-netcore-purple hover:text-netcore-gold">+91 9821186031</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:skocommittee@netcorecloud.com" className="text-netcore-purple hover:text-netcore-gold">skocommittee@netcorecloud.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                        <Globe size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Website</h3>
                        <p className="text-gray-600">
                          <a href="https://www.netcorecloud.com" target="_blank" rel="noopener noreferrer" className="text-netcore-purple hover:text-netcore-gold">www.netcorecloud.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-3 bg-netcore-purple bg-opacity-10 rounded-full mr-4 text-netcore-purple">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Event Location</h3>
                        <p className="text-gray-600">
                          Details to be announced
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-netcore-purple mb-6 flex items-center">
                    <HelpCircle size={24} className="mr-2" />
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-bold text-gray-800 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;
