import { Row, Col, Form } from "react-bootstrap";

const searchstyle = {
    width: "60%",
    margin: 'auto',
    backgroundColor: '#E3D7C8'
}


const SearchBar = ({ setSearchText }) => (
    <Row>
        <Col>
            <Form.Control type="text" placeholder="Sök bland dina favoritrecept... " style={searchstyle} onChange={event => setSearchText(event.target.value)}></Form.Control>
        </Col>
    </Row>
)

export default SearchBar