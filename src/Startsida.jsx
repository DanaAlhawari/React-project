import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row ,Col } from "react-bootstrap";
const imgStyle = {
    width: "100%",
    height: "450px",
}
const receptLink ={
    textDecoration: "none",
    color: "#8B6E4E"
}
const textStyle = {
    backgroundColor: "#E3D7C8",
    padding: "8px 16px",
      /*height: "400px",*/
}

const Recept = () => {
    const [receptList, setRecept] = useState();
useEffect(() => {   
        fetch("https://paprika-bxu3y.ondigitalocean.app/recipes")
        .then(res => res.json())
        .then(data => setRecept(data))
    
}, [])

    //console.log(receptList);

  
  return (
  
        
         <Container>   
 
          <Row>
              {receptList?.map((recept) =>
                <Col sm={12}  md={4} >
                   
                        <NavLink to={`/recipes/${recept._id}`} style={receptLink}>
                            <img alt={recept.title} src={recept.imageUrl} style={imgStyle} />
                            <div style={textStyle}>
                                <h2><b>{recept.title}</b> {recept.avgRating}</h2>
                                <p> {recept.description}</p>
                                <b>{recept.categories} || {recept.timeInMins} Minuter</b>
                            </div>
                        </NavLink>
                   
                    </Col> )}
            </Row>

        </Container>  
       
  ) 

   

}

export default Recept;



