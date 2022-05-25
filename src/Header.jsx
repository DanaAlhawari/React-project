import { NavLink } from "react-router-dom"
import styles from "./App.module.css"
//import SearchBar from "./SearchBar"
import { Container, Row, Col } from "react-bootstrap";
const Btn1Style = {
    color: '#8B6E4E'
};
const Btn3Style = {
    color: '#EAEEC5'
};
const Header = () => (
    <Container>
        <Row><Col className={styles.tittle}>
        
            <h1 ><NavLink to="/" className={styles.h1}>Peppers</NavLink></h1>
            <h2>Pasteries</h2>
        
       </Col> </Row><Row><Col className={styles.categoriButton}>
       
            <button className={styles.btn1}><NavLink to="Kategorisida/Bakelser/recipes" className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn1Style}>BAKELSER </NavLink></button>
          <button className={styles.btn2}><NavLink to="Kategorisida/Kakor/recipes" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn1Style}>KAKOR</NavLink></button>
          <button className={styles.btn3}><NavLink to="Kategorisida/Tårtor/recipes" className={({isActive}) => isActive ? styles.activeLink : styles.inactiveLink} style={Btn3Style}>TÅRTOR</NavLink></button>
        </Col>
        </Row>
    </Container>
)
export default Header;







