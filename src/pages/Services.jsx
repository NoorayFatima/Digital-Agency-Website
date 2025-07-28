import React from 'react';
import { Link } from 'react-router-dom';
// Assuming ServiceCard and services data are structured correctly and imported from these paths
import ServiceCard from '../components/ServiceCard'; // This component will need to be created/updated separately if not already robust
import services from '../data/servicesData'; // This data file will need to be created/updated separately

export default function Services() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Our Comprehensive Digital Services
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            At DigiBoost, we offer a full spectrum of digital marketing solutions designed to elevate your brand and achieve your business objectives.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get a Custom Plan
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Solutions Tailored for Your Success</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Explore our range of expert services, each crafted to deliver measurable results and empower your digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/*
            This assumes ServiceCard component exists and takes id, name, and description props.
            For a more professional look, ensure ServiceCard itself has:
            - Rounded corners and shadows
            - Hover effects (e.g., scale, shadow change)
            - Icons relevant to the service (if not already implemented)
            - Clear headings and readable descriptions
          */}
          {services.map(service => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              description={service.description}
              // You might pass an icon prop here if ServiceCard is designed to accept it
              // icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Let's collaborate to create a powerful digital strategy that drives real growth for your business.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Request a Free Quote
        </Link>
      </section>
    </div>
  );
}
