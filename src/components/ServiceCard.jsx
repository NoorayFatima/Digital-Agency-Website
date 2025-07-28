import { Link } from 'react-router-dom';

export default function ServiceCard({ id, name, description }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link to={`/services/${id}`} className="text-blue-600 hover:underline text-sm">
        Learn More
      </Link>
    </div>
  );
}
