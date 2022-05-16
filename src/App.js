import { Routes, Route } from "react-router-dom";
import Header from './Header';
import styles from "./App.module.css";
import Startsida from './Startsida';
import Receptsida from './Receptsida';
import Bakelser from './categories.jsx/Bakelser';
import Kakor from './categories.jsx/Kakor';
import Tartor from "./categories.jsx/Tartor";


const App = () =>(
 
   
   <div className={styles.font}>
      <Header/>
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="Kategorisida/Bakelser" element={<Bakelser />} />
        <Route path="Kategorisida/Kakor" element={<Kakor />} />
        <Route path="Kategorisida/Tartor" element={<Tartor />} />
        <Route path="Receptsida" element={<Receptsida />} />
      </Routes>
      
      
  </div>

  );

export default App;
