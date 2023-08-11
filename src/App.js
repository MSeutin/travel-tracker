import ListContainer from './components/ListContainer';
import Header from './components/Header';

function App() {
  // placeholder, replace with actual firebase auth in the future
  const username = "Michael"
  return (
    <div className="bg-zinc-800 text-zinc-900 font-mono">
      <Header username={username} />
      <ListContainer />
    </div>
  );
}

export default App;
