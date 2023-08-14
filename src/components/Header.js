import { Link, NavLink } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faEarthAmericas, faHouse, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

export default function Header({username}) {
  const { user, logOut } = UserAuth()
  const handleLogOut = async () => {
    try{
      await logOut()
    } catch(error){
      console.log(error);
    }
  }

  return (
    <nav className="sticky top-0 flex justify-between items-center text-zinc-300 bg-zinc-700 py-2 px-4">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faEarthAmericas}
          spin
          size="xl"
          style={{ color: "crimson" }}
        />
        <span className="text-2xl font-bold">Travel Planner</span>
      </div>
      <div className="flex items-center gap-10">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-300 mr-1 hover:text-zinc-50" : "mr-1 hover:text-zinc-50")}
        >
          <FontAwesomeIcon icon={faHouse} className="mr-1" />
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-green-300 mr-1 hover:text-zinc-50" : "mr-1 hover:text-zinc-50")}
        >
          <FontAwesomeIcon icon={faUmbrellaBeach} className="mr-1" />
          Dashboard
        </NavLink>
        <div className="flex items-center">
          {user?.photoURL && (
            <div>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-8 w-8 rounded-full border-2 border-zinc-100"
              />
            </div>
          )}
          {user?.displayName ? (
            <>
              <button
                onClick={handleLogOut}
                className="bg-transparent border-2  px-2 py-1 rounded ml-3 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
                to="/signin"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="bg-transparent border-2  px-2 py-1 rounded ml-10 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}