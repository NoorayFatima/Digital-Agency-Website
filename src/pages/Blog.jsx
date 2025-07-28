import React from 'react';
import { Link } from 'react-router-dom';
// Assuming blogs data is structured correctly and imported from this path
import blogs from '../data/blogsData'; // This data file will need to be created/updated separately

export default function Blog() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            Insights, Strategies, and Trends
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            Stay ahead in the digital world with expert articles, guides, and analyses from the DigiBoost team.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Subscribe to Our Newsletter
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">Latest Articles & Resources</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Dive into our collection of insightful posts on digital marketing, SEO, social media, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map(post => (
            <div
              key={post.id}
              className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h2>
                {post.date && post.author && ( // Assuming date and author might be available in blogsData
                  <p className="text-sm text-gray-500 mb-4">
                    By <span className="font-semibold">{post.author}</span> on {post.date}
                  </p>
                )}
                <p className="text-gray-700 text-base leading-relaxed mb-6">{post.excerpt}</p>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block self-start text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Don't Miss Out on the Latest Digital Insights!
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Subscribe to our newsletter for exclusive content, industry updates, and expert tips delivered straight to your inbox.
        </p>
        <Link
          to="/contact" // Or to a specific newsletter signup page/modal
          className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}
