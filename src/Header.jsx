import { NavLink } from "react-router-dom";
import styles from "./App.module.css";
const Btn1Style = {
    color: '#8B6E4E'
};
const Btn3Style = {
    color: '#EAEEC5'
};
const Header = () => (
    <>
        <div className={styles.tittle}>
            <h1 ><NavLink to="/" className={styles.h1}>Peppers</NavLink></h1>
            <h2>Pasteries</h2>
        </div>
        <div>sök fält Ingrida</div>
        <div  className={styles.categoriButton}>
          <button className={styles.btn1}><NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn1Style}>BAKELSER</NavLink></button>
          <button className={styles.btn2}><NavLink to="/Kategorisida" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn1Style}>KAKOR</NavLink></button>
          <button className={styles.btn3}><NavLink to="/Receptsida" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn3Style}>TÅRTOR</NavLink></button>
        </div>
        
    </>
)
export default Header;







