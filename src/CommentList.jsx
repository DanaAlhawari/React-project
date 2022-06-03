import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react"
import styles from "./App.module.css";

/* const dateStyle = {
    textAlignLast: 'right'
} */
const CommentList = ({ recipesId }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes/${recipesId}/comments`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    console.log(data)
    return (

        data.map(({ name, comment }) => (
            <Row className={styles.form}>
                <Col >
                    <div key={data._id} >
                        <h4>{name} </h4>
                        <p>{comment}</p>
                    </div>
                </Col>
            </Row>
        ))
    )

}
export default CommentList