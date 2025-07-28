import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  );
}