import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaEnvelope, FaChartLine, FaQuoteLeft } from 'react-icons/fa'; // Added FaQuoteLeft for testimonials

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 px-6 text-center overflow-hidden" // Added overflow-hidden for potential animations
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1542744173-05336fcc7ad4')`,
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Propel Your Brand to Digital Dominance
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            Welcome to **DigiBoost**, your premier digital marketing partner, relentlessly focused on delivering measurable growth and unparalleled online success.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block" // Enhanced button styles
          >
            Get a Free Consultation
          </Link>
        </div>
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Our Core Services</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Crafting data-driven strategies that are tailored to your unique business needs, ensuring impactful results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaSearch size={38} className="text-indigo-600" />,
              title: "SEO & Content Marketing",
              desc: "Elevate your search rankings and attract organic traffic with expertly crafted content and optimization."
            },
            {
              icon: <FaChartLine size={38} className="text-indigo-600" />,
              title: "Social Media Strategy",
              desc: "Build a thriving online community and drive engagement across all leading social platforms with dynamic campaigns."
            },
            {
              icon: <FaEnvelope size={38} className="text-indigo-600" />,
              title: "Conversion-Focused Email Marketing",
              desc: "Transform subscribers into loyal customers with highly personalized and automated email campaigns."
            },
            {
              icon: <FaChartLine size={38} className="text-indigo-600" />, // Reusing icon, consider adding new ones like FaAd or FaMegaphone
              title: "Paid Advertising (PPC)",
              desc: "Maximize your ROI with precisely targeted pay-per-click campaigns on Google, social media, and more."
            },
            {
              icon: <FaSearch size={38} className="text-indigo-600" />, // Reusing icon, consider adding new ones like FaDesktop or FaMobile
              title: "Website Design & Development",
              desc: "Create stunning, high-performing websites optimized for user experience and conversion."
            },
            {
              icon: <FaEnvelope size={38} className="text-indigo-600" />, // Reusing icon, consider adding new ones like FaUsers or FaBullhorn
              title: "Analytics & Reporting",
              desc: "Gain deep insights into your performance with comprehensive data analysis and transparent reporting."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border border-indigo-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-2" // Enhanced card styles
            >
              <div className="flex justify-center items-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-purple-200 py-24 px-6 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Our success is built on the success of our clients. Hear their stories.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
          {[
            {
              quote: "DigiBoost has been a game-changer for our business. Their strategic approach to digital marketing has significantly increased our online visibility and customer engagement. Truly exceptional results!",
              name: "Sarah K.",
              title: "Startup Founder, Tech Innovators Inc."
            },
            {
              quote: "We've seen an incredible surge in leads and conversions since partnering with DigiBoost. Their team is not only highly skilled but also incredibly responsive and dedicated. A real pleasure to work with!",
              name: "Alex R.",
              title: "E-commerce Director, Global Goods Co."
            },
            {
              quote: "The personalized attention and deep understanding of our industry from DigiBoost have been invaluable. Their SEO expertise put us on the map, and we couldn't be happier with the consistent growth.",
              name: "Maria L.",
              title: "Marketing Manager, Health & Wellness Collective"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-xl p-8 border-t-8 border-indigo-500 text-gray-800 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-6">
                <FaQuoteLeft size={24} className="text-indigo-400 mb-4" />
                <p className="italic text-lg leading-relaxed">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-indigo-700 mt-4">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Elevate Your Brand's Digital Footprint?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Don't let your competitors get ahead. Let's discuss a bespoke digital strategy that will accelerate your business growth and achieve your online objectives.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Schedule a Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;