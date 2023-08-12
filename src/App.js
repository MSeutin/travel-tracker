import ListContainer from './components/ListContainer';
import Header from './components/Header';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';

function App() {
  // placeholder, replace with actual firebase auth in the future
  const username = "Michael"
  return (
    <AuthContextProvider>
    <div className="bg-zinc-800 text-zinc-900 font-mono">
      <Header username={username} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Protected><Account /></Protected>} />
      </Routes>
    </div>
    </AuthContextProvider>
  );
}

export default App;
