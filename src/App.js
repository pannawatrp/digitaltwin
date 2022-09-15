import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Building from './pages/building'
import Parking from './pages/parking'
import Floor from './pages/floor'
import EnergyPage from './pages/energypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/building" element={<Building />} />
        <Route path="/floor" element={<Floor />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/energy" element={<EnergyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
