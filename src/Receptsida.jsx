import Form from './Form';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./App.module.css";
import ReactStars from "react-rating-stars-component";
const ratingChanged = (newRating) => {
    console.log('Tack för ditt btyg')
   console.log(newRating);
};
 const rattDivStyle = {
    width: "50%",
    height: "200px",
    margin: "auto",
    marginBottom: "2%",
    textAlign: "center",
    color: "#8B6E4E",
    backgroundColor: 'rgb(227, 215, 200)',
    padding: "16px 32px"
}
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
            <div className={styles.receptFlexContainer} key={Recept._id}>
            <div >
            <img alt={Recept.title} src={Recept.imageUrl } style={imgStyle} />
            <div className={styles.receptCardText}>
                  <h2><b>{Recept.title}</b>
                    <ReactStars
                        count={5}
                        edit= {false}
                        //onChange={ratingChanged}
                        size={35}  
                        isHalf= {true}
                         color= {'#EAEEC5'}
                        activeColor= {"#8B6E4E"}
                       //filledIcon= {<i className="fa fa-star" />}
                        value={Recept.avgRating}                                
                /> </h2>
                <p> {Recept.description}
                <ol key={Recept._id}>
                    {Recept.instructions.map(instruction =>
                    <li > {instruction}</li>)}
               </ol>
                <b>{Recept.categories} || {Recept.timeInMins} Minuter</b></p>
            </div>
        </div>
            </div>
            </> : <>Loading...</>}
            <div style= {rattDivStyle}>
                <h3>Vad tycker du om recept</h3>
                <p>Klicka på en stjärna för att ge ditt btyg</p>
                <p><ReactStars 
                    count={5}
                    // edit= {false}
                    onChange={ratingChanged}
                    size={35}  
                    isHalf= {true}
                    color= {'#8B6E4E'}
                    activeColor={"#EAEEC5"} 
                    justifyContent={false}
                    /></p>
            </div>
             <div className={styles.form}>
                <h3>Kommentarer</h3>
                    <Form  />
                </div>
            </>    
   
  );

}



export default Receptsida;