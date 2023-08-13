import { UserAuth } from '../context/AuthContext'
import ListContainer from '../components/ListContainer';

export default function Account() {
    const { user, logOut } = UserAuth()
      const handleLogOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-center text-2xl font-bold pt-12 mb-10'>
        Welcome, {user?.displayName}
      </h1>
      
      <ListContainer />
    </div>
  );
}