import { UserAuth } from '../context/AuthContext'
import DashboardNav from '../components/Dashboard/DashboardNav';
import AddNewTrip from '../components/Dashboard/AddNewTrip';

export default function Dashboard() {
    const { user, logOut } = UserAuth()
      const handleLogOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className="flex">
      {/* Left Navigation Column */}
      <div className="w-1/8 bg-gray-800 text-white">
        <DashboardNav />
      </div>

      {/* Content Column */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">
          Welcome, {user?.displayName}
        </h1>
        {/* Your content goes here */}
        <AddNewTrip />
      </div>
    </div>
  );
}