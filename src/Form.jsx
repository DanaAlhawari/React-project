// 4.1 Kommentarsfunktion
// Fungerar inte riktigt som den ska än

const KommentarForm = () => (
    <form>
        <input type="text" placeholder="Namn" />
        <input type="text" placeholder="Skriv en kommentar här..."/>
        <button type="submit">Skicka</button>
    </form>
)

const ConfirmationText = () => (
    <p>Tack för din kommentar!</p>
)

const Form = ({ isSent }) => isSent ? <KommentarForm /> : <ConfirmationText />

export default Form;