import DashboardNav from "../components/Dashboard/DashboardNav"
import AddNewTrip from "../components/Dashboard/AddNewTrip"

export default function AddTrip() {
  return (
    <div className="flex">
      {/* Left Navigation Column */}
      <div className="w-1/8 bg-gray-800 text-white">
        <DashboardNav />
      </div>

      {/* Content Column */}
      <div className="flex-grow p-6">
        {/* Your content goes here */}
        <AddNewTrip />
      </div>
    </div>
  );
}