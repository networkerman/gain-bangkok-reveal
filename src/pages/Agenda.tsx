
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import { Download } from 'lucide-react';

const Agenda = () => {
  // Sample agenda data for the three days
  const agendaDays = [
    {
      date: "April 24, 2025",
      events: [
        {
          time: "08:00 - 09:30",
          title: "Registration & Breakfast",
          description: "Pick up your event materials and enjoy networking over breakfast.",
          location: "Main Lobby"
        },
        {
          time: "09:30 - 10:30",
          title: "Opening Keynote: The GAIN Vision",
          description: "Welcome address and introduction to the GAIN theme for 2025.",
          speaker: "CEO, Netcore",
          location: "Grand Ballroom"
        },
        {
          time: "10:45 - 12:30",
          title: "Growth Strategy Session",
          description: "Deep dive into Netcore's growth targets, market opportunities, and expansion plans.",
          speaker: "CRO, Netcore",
          location: "Grand Ballroom"
        },
        {
          time: "12:30 - 14:00",
          title: "Networking Lunch",
          description: "Connect with colleagues over an authentic Thai cuisine experience.",
          location: "Garden Terrace"
        },
        {
          time: "14:00 - 17:00",
          title: "Regional Breakout Sessions",
          description: "Region-specific strategy discussions and target-setting workshops.",
          location: "Multiple Rooms"
        },
        {
          time: "19:00 - 22:00",
          title: "Welcome Dinner & Cultural Performance",
          description: "Enjoy traditional Thai performances while dining with the team.",
          location: "Riverside Pavilion"
        }
      ]
    },
    {
      date: "April 25, 2025",
      events: [
        {
          time: "08:30 - 09:30",
          title: "Breakfast & Morning Check-in",
          description: "Start your day with breakfast and team check-ins.",
          location: "Main Restaurant"
        },
        {
          time: "09:30 - 11:00",
          title: "AI Innovation Showcase",
          description: "Presentation of Netcore's latest AI-driven products and future roadmap.",
          speaker: "CTO, Netcore",
          location: "Grand Ballroom"
        },
        {
          time: "11:15 - 12:30",
          title: "Customer Success Stories Panel",
          description: "Hear from our top global customers about their success with Netcore solutions.",
          speaker: "VP of Customer Success & Selected Customers",
          location: "Grand Ballroom"
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch",
          description: "Continue networking over international cuisine options.",
          location: "Garden Terrace"
        },
        {
          time: "14:00 - 17:00",
          title: "Interactive Workshops: Sales Excellence",
          description: "Hands-on workshops focused on sales strategies, negotiation, and closing techniques.",
          location: "Multiple Rooms"
        },
        {
          time: "Free Evening",
          title: "Explore Bangkok",
          description: "Evening free for team dinners and exploring the city.",
          location: "Various Locations"
        }
      ]
    },
    {
      date: "April 26, 2025",
      events: [
        {
          time: "08:30 - 09:30",
          title: "Breakfast",
          description: "Final day breakfast with your teams.",
          location: "Main Restaurant"
        },
        {
          time: "09:30 - 11:00",
          title: "Innovation & Future Roadmap",
          description: "Strategic vision for Netcore's product and market evolution.",
          speaker: "CPO, Netcore",
          location: "Grand Ballroom"
        },
        {
          time: "11:15 - 12:30",
          title: "Team Presentations & Commitments",
          description: "Regional teams present their strategies and commitments for the coming year.",
          location: "Grand Ballroom"
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch",
          description: "Final networking lunch of the event.",
          location: "Garden Terrace"
        },
        {
          time: "14:00 - 16:00",
          title: "Awards & Recognition Ceremony",
          description: "Celebrating top performers and team achievements from the past year.",
          speaker: "CEO & Leadership Team",
          location: "Grand Ballroom"
        },
        {
          time: "16:00 - 17:00",
          title: "Closing Remarks & Group Photo",
          description: "Final address from leadership and official group photo.",
          speaker: "CEO, Netcore",
          location: "Grand Ballroom & Main Staircase"
        },
        {
          time: "19:00 - 23:00",
          title: "Gala Dinner & Celebration",
          description: "Formal dinner followed by celebration party to conclude the event.",
          location: "Skyline Ballroom"
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      
      <div className="pt-20 bg-gray-50">
        <section className="py-16 bg-netcore-purple">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4 text-center">Event Agenda</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Three days of inspiration, learning, and collaboration to drive Netcore's success.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-netcore-purple mb-2">
                    Complete Schedule: April 24-26, 2025
                  </h2>
                  <p className="text-gray-600 mb-4 md:mb-0">
                    All sessions are mandatory as per the Code of Conduct. Times are in Bangkok local time (ICT, UTC+7).
                  </p>
                </div>
                
                <a 
                  href="/placeholder-schedule.pdf" 
                  download="GAIN2025_Schedule.pdf"
                  className="inline-flex items-center px-4 py-2 bg-netcore-purple text-white rounded-md hover:bg-netcore-purple/90 transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Full Schedule
                </a>
              </div>
            </div>
            
            <div className="space-y-12">
              {agendaDays.map((day, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-netcore-purple mb-6 px-4">
                    Day {index + 1}: {day.date}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {day.events.map((event, idx) => (
                      <EventCard 
                        key={idx}
                        time={event.time}
                        title={event.title}
                        description={event.description}
                        speaker={event.speaker}
                        location={event.location}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-netcore-purple mb-4">Important Notes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <span>The agenda may be subject to minor changes. Updates will be communicated via email and the event app.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <span>Please arrive 15 minutes before each session to ensure a timely start.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <span>Attendance at all sessions is mandatory as per the Code of Conduct.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-netcore-gold mr-2">•</span>
                  <span>Business casual attire is appropriate for all daytime sessions. The Gala Dinner is formal attire.</span>
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

export default Agenda;
