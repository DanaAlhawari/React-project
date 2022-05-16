import Form from '../Form';
import { useState } from "react";
import { useEffect } from "react";
import styles from "../App.module.css";
const imgStyle = {
    width: "100%",
    height: "auto",
   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}

const Receptsida = () => {
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
        fetch("https://paprika-bxu3y.ondigitalocean.app/recipes?query=id")
        .then(res => res.json())
        .then(data => setRecept(data))
    
}, [])

    console.log(IsRecept);

    const Recepten = IsRecept?.map((recept) =>
        
        <div key={recept.id}>
            <img alt={recept.title} src={recept.imageUrl } style={imgStyle} />
            <div className={styles.receptCardText}>
                <h2><b>{recept.title}</b> {recept.avgRating}</h2>
                <p> {recept.description}</p>
                <p><ol>
                    {recept.instructions.map(instruction =>
                    <li> {instruction}</li>)}
               </ol> </p>
                <b>{recept.categories} || {recept.timeInMins} Minuter</b>
            </div>
        </div>
       
    )

    return (
  
        <>
            <div className={styles.receptFlexContainer}>
               {Recepten}
            </div>
            <div className={styles.form}>
                <h3>Kommentarer</h3>
                <Form isSent={true}/>
            </div>
            
            </>
        
        
        
   
  );

}



export default Receptsida;