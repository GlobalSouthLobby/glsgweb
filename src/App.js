
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ezeh from './pages/Profile/Ezeh';
import Kat from './pages/Profile/Kat';
import AtWork from './pages/AtWork/AtWork';
function App() {
  return (
    <Router>
    <Routes>
    <Route index  element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact /> } />
    <Route path="Atwork" element={<AtWork/>} />
    <Route path="/profile/ezeh" element={<Ezeh /> } /> 
    <Route path="/profile/katherine" element={<Kat /> } />

    </Routes>
    </Router>
 
  
  );
}

export default App;
