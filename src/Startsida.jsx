import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./App.module.css";
const imgStyle = {
    width: "100%",
    height: "450px",
}

const Recept = () => {
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
        fetch("https://paprika-bxu3y.ondigitalocean.app/recipes")
        .then(res => res.json())
        .then(data => setRecept(data))
    
}, [])

    console.log(IsRecept);

    const Recepten = IsRecept?.map((recept) =>
        
        <div >
            <NavLink to="/:receptId">
            <img alt={recept.title} src={recept.imageUrl } style={imgStyle} />
            <div className={styles.cardText}>
                <h2><b>{recept.title}</b> {recept.avgRating}</h2>
                <p> {recept.description}</p>
                <b>{recept.categories} || {recept.timeInMins} Minuter</b>
            </div>
            </NavLink>
        </div>
       
    )

    return (
  
        
        <div className={styles.flexContainer}>
        {Recepten}
         </div>
   
  );

}

export default Recept;



