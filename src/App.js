import ListContainer from './components/ListContainer';
import Header from './components/Header';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';

function App() {
  return (
    <AuthContextProvider>
    <div className="bg-zinc-800 text-zinc-200 font-mono min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
      </Routes>
    </div>
    </AuthContextProvider>
  );
}

export default App;
