// 4.1 Kommentarsfunktion
// Fungerar inte riktigt som den ska än
import {useState} from 'react'
import styles from "./App.module.css";
 
const Form = () => {
     const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const isEnabled = name.length > 0 && comment.length > 0;
    const onSubmit = (e) => {
        e.preventDefault();
        setName('');
        setComment('');
        const date = new Date().toDateString();
        console.log(name, comment, date); 
    }
   
    return ( 
        
        <form onSubmit = {onSubmit}  >
            <input type="text" placeholder="Namn" value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} /> <br />
           
            <textarea type="text" placeholder="Skriv en kommentar här..." value={comment}
                onChange={(e) => {
                    setComment(e.target.value);
                }}  ></textarea>
            <button className={styles.submit} disabled={!isEnabled}>Skicka</button>
            
        </form>
    )
}





export default Form;