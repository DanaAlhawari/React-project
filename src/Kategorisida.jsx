import { useState } from "react";
import { useEffect } from "react";
import styles from "./App.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';

const imgStyle = {
    width: "100%",
    height: "450px",
}
const receptLink ={
    textDecoration: "none",
    color: "#8B6E4E"
}
const Bakelser = () => {
    const {categories}  = useParams();
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
     fetch(`https://paprika-bxu3y.ondigitalocean.app/categories/${categories}/recipes`)
         .then(res => res.json())
         .then(data => setRecept(data))
    
}, [categories])

   console.log(categories);

    const Recepten = IsRecept?.map((recept) =>
        
    
        <div ><NavLink to={`/recipes/${recept._id}`} style={receptLink}>
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
        {Recepten }
         </div>
   
  );

}
export default Bakelser;