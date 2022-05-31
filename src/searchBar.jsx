import { useState } from "react";
import { useEffect } from "react";
import {  Row, Col,Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "./Header"
const searchstyle ={
    width: "61%"
}

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

const Search = () => {
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

return(
    
<Row>
<Col>
   <Form.Control type="text" style={searchstyle} onChange={event => setSearchText(event.target.value)}></Form.Control>
</Col>
</Row>
<Row>
              {isLoading ?
               <p>Laddar...</p> : receptList.length === 0 ?
                   <p>Inga bakverk hittades!</p> : receptList.map((recept) =>
                <Header recept={recept} />
                        )}
                        </Row>       

)

}

export default Search;