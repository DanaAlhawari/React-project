// 4.1 Kommentarsfunktion
// Fungerar inte riktigt som den ska än
import styles from "./App.module.css";
const KommentarForm = () => (
    <form>
        <input type="text" placeholder="Namn" />
        <textarea type="text" placeholder="Skriv en kommentar här..."/>
        <button className={styles.submit}type="submit">Skicka</button>
    </form>
)

const ConfirmationText = () => (
    <p>Tack för din kommentar!</p>
)

const Form = ({ isSent }) => isSent ? <KommentarForm /> : <ConfirmationText />

export default Form;