
import {Mail, MapPin, GithubIcon } from "lucide-react";
import DevMind from "./devmind.jpeg";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col overflow-hidden">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-6 relative pt-12">
        {/* Decorative Blobs */}
        <div className="absolute -top-28 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-28 -right-72 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div>

        {/* About Us Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-5xl font-extrabold text-[#A97DBC] tracking-wide mb-4">
            About DevMinds
          </h1>
          <div className="w-24 h-24 rounded-full bg-white shadow-xl mx-auto mb-6 flex items-center justify-center overflow-hidden">
            <img
              src={DevMind}
              alt="DevMind Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Us Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl relative z-10 mb-12">
          <p className="text-lg text-[#A97DBC] mb-6 leading-relaxed">
            DevMinds is an AI-driven platform for neurodiversity therapeutic support providing personalized, 
            accessible learning experiences. We deliver an affordable, evidence-based alternative to in-person 
            therapy that can be implemented immediately from your own home.
          </p>
          <p className="text-lg text-[#A97DBC] mb-6 leading-relaxed">
            Our solution enables users to practice social-emotional skills in an immersive and controlled 
            environment, helping them gain independence and confidence in real-world interactions.
          </p>
          <div className="my-8 border-t border-b border-pink-200 py-6">
            <h3 className="text-2xl font-bold text-[#A97DBC] mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-[#A97DBC] leading-relaxed">
              To empower individuals with neurodiversity through innovative technology, creating a more inclusive world where everyone can thrive in their unique way.
            </p>
          </div>
          
          <button
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-xl mt-4 mx-auto block"
            onClick={handleHomeClick}
          >
            Back to Home
          </button>
        </div>
      </main>

      {/* Contact Section */}
      <section className="rounded-t-3xl shadow-lg mt-auto py-8 px-6 space-y-6">
        <h3 className="text-3xl font-bold text-[#A97DBC] mb-6 text-center">
          Get In Touch
        </h3>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <Mail className="text-[#A97DBC] mb-4" size={36} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">
              Email Us
            </h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              devmindsvr@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <GithubIcon className="text-[#A97DBC] mb-4" size={36} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">
              Find Us
            </h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              devminds-ai
            </p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <MapPin className="text-[#A97DBC] mb-4" size={36} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">
              Currently at
            </h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Johns Hopkins University
            </p>
          </div>
        </div>
        
       
      </section>
    </div>
  );
};

export default AboutUs;