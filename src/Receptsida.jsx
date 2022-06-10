// 4 Receptsida

import Form from './Form';
import CommentList from './CommentList';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import styles from "./App.module.css";
import ReactStars from "react-rating-stars-component";
import { Container, Row, Col, Card } from "react-bootstrap";
import RatingsPost from './Ratings';


const Receptsida = () => {
    const { recipesId } = useParams();
    const [Recept, setRecept] = useState();
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}`)
            .then(res => res.json())
            .then(data => setRecept(data))

    }, [recipesId])


    // 2.4 Tid det tar att göra receptet

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
                                <div style={{ backgroundColor: '#FFF8F0', opacity: '0.7', width: "80%", margin: '3% auto', padding: 16 }}>
                                    <h2>{Recept.title}</h2>
                                 <ul>
                                    {Recept.ingredients.map(ingredient =>
                                        <li > {ingredient.amount} {ingredient.unit} {ingredient.name}</li>)}
                                    </ul> 
                                 <Card.Text>
                                 <p>{Recept.description}</p>
                                        
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

            <RatingsPost recipesId={recipesId} onChange={false} />


            <br />
            <Row className={styles.form}>
                <Col >
                    <h3>Kommentarer</h3>
                    <Form recipesId={recipesId} data={data} setData={setData} />
                </Col>
            </Row>
            <br />
            <CommentList recipesId={recipesId} data={data} setData={setData} />
        </Container>

    );

}



export default Receptsida;