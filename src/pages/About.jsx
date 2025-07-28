import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaHandshake, FaRocket, FaShieldAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons for values

const About = () => {
  const team = [
    {
      name: "Ali Khan",
      role: "Chief Executive Officer",
      bio: "A visionary leader with over 15 years of experience in digital strategy and business growth. Ali's passion lies in empowering brands to achieve their full online potential.",
      image: "https://placehold.co/150x150/A78BFA/FFFFFF?text=AK", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Zara Malik",
      role: "Head of Content Strategy",
      bio: "An award-winning storyteller and content architect, Zara specializes in crafting compelling narratives that resonate with audiences and drive engagement.",
      image: "https://placehold.co/150x150/818CF8/FFFFFF?text=ZM", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Umair Iqbal",
      role: "Lead SEO Specialist",
      bio: "A data-driven SEO maestro, Umair is dedicated to optimizing online visibility and ensuring our clients rank high and attract the right organic traffic.",
      image: "https://placehold.co/150x150/6366F1/FFFFFF?text=UI", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Fatima Ahmed",
      role: "Social Media Manager",
      bio: "Fatima is an expert in building vibrant online communities and executing impactful social media campaigns that convert followers into loyal customers.",
      image: "https://placehold.co/150x150/4F46E5/FFFFFF?text=FA", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Hassan Raza",
      role: "PPC Campaign Strategist",
      bio: "With a keen eye for analytics and market trends, Hassan crafts highly effective paid advertising campaigns that deliver maximum ROI for our clients.",
      image: "https://placehold.co/150x150/4338CA/FFFFFF?text=HR", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sana Tariq",
      role: "Web Development Lead",
      bio: "Sana brings designs to life with robust and responsive web solutions, ensuring every website is not just beautiful but also highly functional and user-friendly.",
      image: "https://placehold.co/150x150/3730A3/FFFFFF?text=ST", // Placeholder image
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ];

  const coreValues = [
    {
      icon: <FaLightbulb size={40} className="text-indigo-600 mb-4" />,
      title: "Innovation & Adaptability",
      description: "We constantly evolve our strategies, embracing new technologies and trends to keep our clients ahead of the curve."
    },
    {
      icon: <FaHandshake size={40} className="text-indigo-600 mb-4" />,
      title: "Client-Centric Partnership",
      description: "Your success is our ultimate goal. We build strong, transparent relationships based on trust and mutual growth."
    },
    {
      icon: <FaRocket size={40} className="text-indigo-600 mb-4" />,
      title: "Result-Driven Excellence",
      description: "We are committed to delivering measurable outcomes and tangible ROI, focusing on strategies that bring real business impact."
    },
    {
      icon: <FaShieldAlt size={40} className="text-indigo-600 mb-4" />,
      title: "Integrity & Transparency",
      description: "Honesty and clear communication are at the core of everything we do, ensuring you're always informed and confident."
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Empowering Your Digital Journey
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            At <span className="font-bold text-indigo-300">DigiBoost</span>, we are more than just a digital marketing agency; we are your dedicated partners in achieving sustainable online growth.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Connect With Us
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Who We Are / Our Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            Founded on the principles of innovation, transparency, and unwavering client success, DigiBoost has grown into a leading digital marketing agency. We leverage cutting-edge strategies and data-driven insights to transform businesses and help them thrive in the ever-evolving digital landscape.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mt-4">
            Our journey began with a simple belief: every business, regardless of size, deserves a powerful online presence. Today, we continue to uphold this belief by delivering bespoke digital solutions that yield measurable results and foster long-term partnerships.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Our Guiding Principles</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            These values define our approach and commitment to every client we serve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-8 text-center flex flex-col items-center justify-center border-b-4 border-indigo-500 hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-2"
            >
              {value.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Meet Our Exceptional Team</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Our diverse team of digital experts is passionate about what they do and dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-indigo-500 shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-lg text-indigo-700 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-6">{member.bio}</p>
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    <FaLinkedinIn size={24} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-300">
                    <FaTwitter size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Discover Your Digital Potential?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          We're excited to learn about your business and discuss how DigiBoost can help you achieve your online goals.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Let's Start a Conversation
        </Link>
      </section>
    </div>
  );
};

export default About;
