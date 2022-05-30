import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col,Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

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
    const [receptList, setRecept] = useState([]);
    const [searchText, setSearchText] = useState ("")
    const [isLoading, setIsLoading] = useState (false)
    useEffect(() => {
    setIsLoading (true)
        fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes?query=${searchText}`)
        .then(res => res.json())
        .then(data => {
            setIsLoading (false) 
            setRecept(data)
            
        })
    
}, [searchText])

    //console.log(receptList);

  return (
      <Container>  
           <Row>
            <Col>
               <Form.Control type="text" onChange={event => setSearchText(event.target.value)}></Form.Control>
           </Col>
       </Row>
          <Row>
              {isLoading ?
               <p>Laddar...</p> : receptList.length === 0 ?
                   <p>Inga bakverk hittades!</p> : receptList.map((recept) =>
                <Col sm={12}  md={6} lg={4} key={recept._id}>
                        <NavLink to={`/recipes/${recept._id}`} style={receptLink}>
                            <img alt={recept.title} src={recept.imageUrl} style={imgStyle} />
                            <div style={textStyle}>
                                 <h2><b>{recept.title}</b>
                                <ReactStars
                                      count={5}
                                      edit= {false}
                                      //onChange={ratingChanged}
                                      size={35}  
                                      isHalf= {true}
                                       color= {'#EAEEC5'}
                                      activeColor= {"#8B6E4E"}
                                      value={recept.avgRating}                                
                                />   </h2>
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



