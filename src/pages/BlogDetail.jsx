import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogsData'; // Ensure this data structure is robust
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // For social share icons

export default function BlogDetail() {
  const { postId } = useParams();
  const post = blogs.find((b) => b.id === postId);

  if (!post) {
    return (
      <div className="bg-white text-gray-800 font-sans antialiased min-h-screen flex items-center justify-center py-20 px-6">
        <div className="text-center bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">Blog Post Not Found</h2>
          <p className="text-lg text-gray-700 mb-8">
            The blog post you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    );
  }

  // Helper to format date if available
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString; // Return original if formatting fails
    }
  };

  // Construct share URLs (placeholders)
  const currentUrl = window.location.href;
  const shareText = `Check out this article: ${post.title} by DigiBoost`;

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section for Blog Detail */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url('https://images.unsplash.com/photo-1488190211105-8b0e65d806fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`, // Placeholder image
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
            {post.title}
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 animate-fade-in-up">
            {post.excerpt}
          </p>
          <Link
            to="/blog"
            className="bg-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Back to Blog
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Blog Post Content Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">{post.title}</h2>
          <p className='text-indigo-800 mb-2 text-center'>{post.description}</p>
          <p className='text-indigo-800 mb-2 text-center'>{post.details}</p>

          <div className="text-center text-gray-600 text-md mb-10">
            {post.author && <span className="font-semibold">By {post.author}</span>}
            {post.author && post.date && <span className="mx-2">|</span>}
            {post.date && <span>Published on {formatDate(post.date)}</span>}
          </div>

         

          {/* Share Section */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-indigo-800 mb-6">Share This Article</h3>
            <div className="flex justify-center space-x-6">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300"
                title="Share on Facebook"
              >
                <FaFacebookF size={32} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transform hover:scale-110 transition-transform duration-300"
                title="Share on Twitter"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}&source=${encodeURIComponent(window.location.origin)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transform hover:scale-110 transition-transform duration-300"
                title="Share on LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section (consistent with other pages) */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready for More Digital Marketing Insights?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
          Explore our full blog for expert articles or subscribe to our newsletter for exclusive content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/blog"
            className="bg-white text-indigo-800 px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Browse All Articles
          </Link>
          <Link
            to="/contact" // Or a dedicated subscribe route
            className="bg-indigo-600 text-white px-12 py-5 inline-block rounded-full font-bold text-lg shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
