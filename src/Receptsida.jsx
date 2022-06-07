import Form from './Form';
import CommentList from './CommentList';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./App.module.css";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col, Card } from "react-bootstrap";
const ratingChanged = (newRating) => {
    console.log('Tack för ditt betyg')
    console.log(newRating);
};
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
const imgStyle = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}


const Receptsida = () => {
    const { recipesId } = useParams();
    const [Recept, setRecept] = useState();
    useEffect(() => {
        fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}`)
            .then(res => res.json())
            .then(data => setRecept(data))

    }, [recipesId])
    return (
        <Container>
            <Row>{Recept ?
                <Col key={Recept._id} >
                    <Card className={styles.receptFlexContainer}>
                        {/* <Card.Img alt={Recept.title} src={Recept.imageUrl} style={imgStyle} /> */}
                        <Card.Body className={styles.receptCardText} style={{ padding: 0 }} >
                            <div style={{
                                backgroundImage: `url(${Recept.imageUrl}) `, backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover', backgroundPosition: 'center'
                            }} className={styles.cardBody}>
                                <div style={{ backgroundColor: '#FFF8F0', opacity: '0.7', padding: 16 }}>
                                    <h2>{Recept.title}</h2>

                                    <Card.Text>
                                        {Recept.description}
                                        <ol>
                                            {Recept.instructions.map(instruction =>
                                                <li > {instruction}</li>)}
                                        </ol>
                                        <strong>{Recept.categories} || {Recept.timeInMins} Minuter </strong>
                                        <ReactStars
                                            count={5}
                                            edit={false}
                                            size={35}
                                            isHalf={true}
                                            color={'#EAEEC5'}
                                            activeColor={"#8B6E4E"}
                                            value={Recept.avgRating} />
                                    </Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                : <>Loading...</>}
            </Row>
            <br />
            <Row style={rattDivStyle}>
                <Col >
                    <h3>Vad tycker du om receptet?</h3>
                    <p>Klicka på en eller flera stjärnor för att ge ditt betyg, tack!</p>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={35}
                        isHalf={true}
                        color={'#EAEEC5'}
                        activeColor={"#8B6E4E"}
                    />
                </Col>
            </Row>
            <br />
            <Row className={styles.form}>
                <Col >
                    <h3>Kommentarer</h3>
                    <Form recipesId={recipesId} />
                </Col>
            </Row>
            <br />
            <CommentList recipesId={recipesId} />
        </Container>

    );

}



export default Receptsida;