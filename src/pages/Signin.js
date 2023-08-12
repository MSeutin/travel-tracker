import { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()
    const handleGoogleSignin = async () => {
        try{
            await googleSignIn()
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if(user !== null){
            navigate('/account')
        }
    }, [user])

  return (
    <div className="px-4 py-8 flex flex-col justify-center items-center">
      <GoogleButton onClick={handleGoogleSignin} />
    </div>
  );
}