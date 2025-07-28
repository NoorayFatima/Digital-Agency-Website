import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import icons

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Let's Connect and Grow Together
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            We're eager to hear about your digital marketing challenges and how DigiBoost can help you succeed. Reach out today!
          </p>
          <Link
            to="/services"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Explore Our Services
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Get In Touch With Us</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Whether you have a question or need a consultation, our team is ready to assist you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry about SEO services"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project or question..."
                  className="w-full p-4 border border-gray-300 rounded-xl h-40 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-y"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white w-full py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-10 rounded-3xl shadow-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl font-bold text-indigo-800 mb-8">Contact Information</h3>
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaMapMarkerAlt size={28} className="text-indigo-600 flex-shrink-0" />
                <span>123 Digital Street, Suite 456, Marketing City, DM 78901, USA</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaPhone size={28} className="text-indigo-600 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaEnvelope size={28} className="text-indigo-600 flex-shrink-0" />
                <a href="mailto:info@digiboost.com" className="hover:underline">info@digiboost.com</a>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition-transform duration-300">
                <FaFacebookF size={32} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transform hover:scale-110 transition-transform duration-300">
                <FaTwitter size={32} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-700 transform hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Find Our Location</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Visit us at our office or schedule an appointment.
          </p>
        </div>
        <div className="max-w-7xl mx-auto bg-gray-200 rounded-3xl shadow-xl overflow-hidden aspect-w-16 aspect-h-9">
          {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.298759876543!2d-122.41941568468167!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b2f1e2f1f%3A0x8085808b2f1e2f1f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1678901234567!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Office Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Start Your Digital Success Story?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Don't hesitate to reach out. We're here to help your business thrive online.
        </p>
        <Link
          to="/contact" // Can link to a specific form section or just refresh the page for top form
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Send Us a Message
        </Link>
      </section>
    </div>
  );
}
