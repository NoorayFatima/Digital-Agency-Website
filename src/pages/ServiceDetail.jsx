import React from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../data/servicesData'; // Ensure this data structure is robust

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="bg-white text-gray-800 font-sans antialiased min-h-screen flex items-center justify-center py-20 px-6">
        <div className="text-center bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">Service Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">
            The service you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/services"
            className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section for Service Detail */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`, // Placeholder image
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            {service.name}
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            {service.tagline || service.description} {/* Use a tagline if available, otherwise description */}
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Service Details Content Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">{service.name} Overview</h2>

          {/* Service Description */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              {service.fullDescription || service.description} {/* Use fullDescription if available */}
            </p>
            {/* Add more detailed paragraphs or bullet points if your data supports it */}
            {service.keyBenefits && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">Key Benefits:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  {service.keyBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.processSteps && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">Our Process:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
                  {service.processSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Call to Action within the detail page */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-indigo-800 mb-4">Ready to Implement {service.name}?</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our expert team can tailor a strategy to meet your specific goals.
            </p>
            <Link
              to="/contact"
              className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section (consistent with other pages) */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Don't Let Your Digital Potential Go Untapped.
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Explore our full range of services or get in touch for a personalized consultation.
        </p>
        <Link
          to="/services"
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          View All Services
        </Link>
      </section>
    </div>
  );
}
