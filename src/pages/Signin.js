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

  return <div className="text-amber-500 text-center">
    <h1>Signin</h1>
    <GoogleButton onClick={handleGoogleSignin} />
  </div>;
}