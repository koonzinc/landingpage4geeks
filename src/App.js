import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
