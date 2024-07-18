import './App.css';
import { Navbar } from './components/index'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
