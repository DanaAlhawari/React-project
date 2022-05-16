import { useState } from "react";
import { useEffect } from "react";
import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const imgStyle = {
    width: "100%",
    height: "450px",
}
const receptLink ={
    textDecoration: "none",
    color: "#8B6E4E"
}
const Tartor = () => {
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
        fetch("https://paprika-bxu3y.ondigitalocean.app/categories/Tårtor/recipes")
        .then(res => res.json())
        .then(data => setRecept(data))
    
}, [])

    //console.log(IsRecept);

    const Recepten = IsRecept?.map((recept) =>
        
        <div ><NavLink to="/Receptsida" style={receptLink}>
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
export default Tartor;