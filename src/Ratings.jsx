import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./App.module.css";

const rattDivStyle = {
    width: "50%",
    height: "200px",
    margin: "auto",
    textAlign: "center",
    color: "#8B6E4E",
    backgroundColor: 'rgb(227, 215, 200)',
    padding: "16px 32px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}

const RatingsPost = ({ recipesId }) => {

    const [Rating, setRating] = useState()
    const [message, setMessage] = useState()
    
    if (Rating) {
        fetch(
            `https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}/ratings`,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    rating: `${Rating}`
                }),
            })
           
           
            .then((res) => {
                if (res.status === 200) {
                    setMessage("Tack för din röst!")
                  
                } else {
                    setMessage("Det gick något fel");
                   
                }
            });
           
       
    } 
  
    return (
        <Container>
            <Row style={rattDivStyle}>

                <Col >
                    <h3>Vad tycker du om receptet?</h3>
                    <p>Klicka på en eller flera stjärnor för att ge ditt betyg, tack!</p>
                {message ? <p>{message}</p> : 
                    <ReactStars
                        count={5}
                        onChange={setRating}
                        size={35}
                        isHalf={true}
                        color={'#EAEEC5'}
                        activeColor={"#8B6E4E"}
                    />
                }
                </Col>
            </Row>
        </Container>
    )
}

export default RatingsPost