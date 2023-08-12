import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

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
    <div className="text-center text-zinc-100 py-5 px-2 mb-10 bg-orange-800">
      <span>Hello</span>
      {user?.displayName ? (
        <button 
        onClick={handleLogOut}
        className="bg-zinc-700 px-2 py-1 rounded ml-10" to="/signin">
          LogOut
        </button>
      ) : (
        <Link className="bg-zinc-700 px-2 py-1 rounded ml-10" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  );
}