import { Link } from 'react-router-dom';
export default function DashboardNav() {
  return (
    <nav className="flex flex-col min-h-screen bg-zinc-100 text-zinc-800 h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="border-b mb-4"></div>
      <Link to="/dashboard" className="text-md mb-4 hover:underline">
        # My Dashboard
      </Link>
      <Link to="/dashboard/upcoming" className="text-md mb-4 hover:underline">
        # Upcoming Trips
      </Link>
      <Link to="/dashboard/past" className="text-md mb-4 hover:underline">
        # Past Trips
      </Link>
      <Link to="/dashboard/add" className="text-md hover:underline">
        # Add New Trip
      </Link>
    </nav>
  );
}