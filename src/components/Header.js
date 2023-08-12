import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="sticky top-0 flex justify-between items-center text-zinc-100 bg-zinc-700 py-2 px-4">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={faEarthAmericas}
          spin
          size="xl"
          style={{ color: "crimson" }}
        />
        <span className="text-2xl font-bold">Travel Planner</span>
      </div>
      <div className="text-right flex space-x-4">
        {user?.photoURL && (
          <div className="flex items-center">
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
              className="bg-transparent border-2  px-2 py-1 rounded ml-10 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
              to="/signin"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link
            className="bg-transparent border-2  px-2 py-1 rounded ml-10 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
            to="/signin"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}