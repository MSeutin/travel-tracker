import { Link } from "react-router-dom";

export default function EditPackingList() {
  return (
    <Link
      to="/dashboard/packing-list"
      className="bg-transparent border-2 border-green-800 text-green-800 px-4 py-2 rounded ml-3 mt-2 hover:border-green-600 hover:text-green-600"
    >
      Edit
    </Link>
  );
}
