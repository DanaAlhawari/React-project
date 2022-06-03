import { Row, Col,Form } from "react-bootstrap";

const searchstyle ={
    width: "87%",
    margin: 'auto'
}


const SearchBar = ({setSearchText}) => (
<Row>
            <Col>
               <Form.Control type="text" style={searchstyle} onChange={event => setSearchText(event.target.value)}></Form.Control>
           </Col>
       </Row>
)

export default SearchBar