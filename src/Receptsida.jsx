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
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
     fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}`)
         .then(res => res.json())
         .then(data => setRecept(data))
  
}, [recipesId])


console.log(IsRecept)




 /* 
       
        */

    return (
  
        <>

{IsRecept ? <>
                    
                    
               
            <div className={styles.receptFlexContainer}>
            <div key={IsRecept.id}>
            <img alt={IsRecept.title} src={IsRecept.imageUrl } style={imgStyle} />
            <div className={styles.receptCardText}>
                <h2><b>{IsRecept.title}</b> {IsRecept.avgRating}</h2>
                <p> {IsRecept.description}</p>
                <p><ol>
                    {IsRecept.instructions.map(instruction =>
                    <li> {instruction}</li>)}
               </ol> </p>
                <b>{IsRecept.categories} || {IsRecept.timeInMins} Minuter</b>
            </div>
        </div>
            </div>
            <div className={styles.form}>
                <h3>Kommentarer</h3>
                <Form isSent={true}/>
            </div>
            </> : <>Loading...</>}
            </>
        
        
        
   
  );

}



export default Receptsida;