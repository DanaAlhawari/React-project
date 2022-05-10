import { Routes, Route, NavLink } from "react-router-dom";
import Startsida from './Startsida';
import Kategorisida from './Kategorisida';
import Receptsida from './Receptsida';

const App = () =>(
   <div>
      <h1>Peppers Pasteries</h1>
      <h2>Meny</h2>
      <ul>
          <li><NavLink to="/">Startsida</NavLink></li>
          <li><NavLink to="/Kategorisida">Kategorisida</NavLink></li>
          <li><NavLink to="/Receptsida">Receptsida</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="Kategorisida" element={<Kategorisida />} />
          <Route path="Receptsida" element={<Receptsida />} />
      </Routes>
  </div>

  );

export default App;
