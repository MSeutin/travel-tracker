import travelImage from "../images/travel1.svg";

export default function Hero() {
  return (
    <div className="flex items-center py-16 px-4">
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4">Plan your Next Adventure</h1>
        <p className="text-gray-600 text-lg mb-6">
          Track Your Travels: Metrics and Insights for Every Destination.
        </p>
        <p className="text-gray-600 mb-8">
          Maximize your journeys through calculated budgets and packing tailored
          for you.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors">
          Start Planning
        </button>
      </div>
      <div className="w-1/2">
        <img
          src={travelImage}
          alt="Travel Adventure"
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}
