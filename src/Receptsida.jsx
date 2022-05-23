import Form from './Form';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./App.module.css";

const imgStyle = {
    width: "100%",
    height: "auto",
   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}

const Receptsida = () => {
    const {recipesId} = useParams();
    const [Recept, setRecept] = useState();
    
useEffect(() => {   
     fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}`)
         .then(res => res.json())
         .then(data => setRecept(data))
  
}, [recipesId])


//console.log(Recept)


    return (
  
        <>

{Recept ? <>
                    
                    
               
            <div className={styles.receptFlexContainer}>
            <div key={Recept.id}>
            <img alt={Recept.title} src={Recept.imageUrl } style={imgStyle} />
            <div className={styles.receptCardText}>
                <h2><b>{Recept.title}</b> {Recept.avgRating}</h2>
                <p> {Recept.description}
                <ol key={Recept.id}>
                    {Recept.instructions.map(instruction =>
                    <li key={Recept.id}> {instruction}</li>)}
               </ol>
                <b>{Recept.categories} || {Recept.timeInMins} Minuter</b></p>
            </div>
        </div>
            </div>
            </> : <>Loading...</>}
             <div className={styles.form}>
                <h3>Kommentarer</h3>
                    <Form  />
                </div>
            </>
        
        
        
   
  );

}



export default Receptsida;