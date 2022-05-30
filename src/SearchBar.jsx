import { useState, useEffect } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Header from "./Header"

const SearchBar = () => {
const [searchText, setSearchText] = useState ("")
const [isLoading, setIsLoading] = useState (false)
const [receptList, setRecept] = useState([])  /*ändra namn på setRecept till setReceptList och på startsidan*/

useEffect(() => {  
setIsLoading (true)
    fetch(`https://paprika-bxu3y.ondigitalocean.app/recipes?query=${searchText}`)

        .then(res => res.json())
        .then(data => {
            setIsLoading (false) 
            setRecept(data)
            
        })

}, [searchText])
console.log(receptList)
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
                   <p>Inga bakverk hittades!</p> : receptList.map(recept => <Col key={recept.id}><Header recept={recept} /></Col>)}
       </Row>
   </Container>
)

}

export default SearchBar