import { Routes, Route } from "react-router-dom";
import Header from './Header';
import styles from "./App.module.css";
import Startsida from './Startsida';
import Kategorisida from './Kategorisida';
import Receptsida from './Receptsida';


const App = () =>(
 
   
   <div className={styles.font}>
      <Header/>
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="Kategorisida" element={<Kategorisida />} />
          <Route path="Receptsida" element={<Receptsida />} />
      </Routes>
      
      
  </div>

  );

export default App;
