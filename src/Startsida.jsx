import { useState } from "react";
import { useEffect } from "react";

const Recept = () => {
    const [IsRecept, setRecept] = useState();
useEffect(() => {   
        fetch("https://paprika-bxu3y.ondigitalocean.app/recipes")
        .then(res => res.json())
        .then(data => setRecept(data))
    
}, [])

console.log(IsRecept)

const Recepten = IsRecept?.map((recept) =>
<div>

<h1>{recept.title}</h1>
<div>{recept.instructions}</div>
</div>
)

return (
    
    <div>
        <h2>Startsida</h2>
        <p>Välkommen till vår sida!</p>
        {Recepten}
    </div>
  );

}

export default Recept;



