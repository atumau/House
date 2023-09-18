import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import FeaturedHome from './Components/featuredhome';
import About from './Components/about';
import Homepage from './Components/homepage';
import Agents from './Components/agents';
import Contact from './Components/contact';
import List from './Components/list';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/featuredhome" element={<FeaturedHome />} />
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
