import { Routes, Route } from "react-router-dom";
import Header from './Header';
import styles from "./App.module.css";
import Startsida from './Startsida';
import Receptsida from './Receptsida';
import Kategorisida from './Kategorisida';

import 'bootstrap/dist/css/bootstrap.css'; 


const App = () =>(
 
   
   <div className={styles.font}>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="Kategorisida/:categories/recipes" element={<Kategorisida />} />
     
        <Route path="/recipes/:recipesId" element={<Receptsida />} />
      </Routes>
      
      
  </div>

  );

export default App;
