import { useState } from "react";

const Componente1 = ({ calcula }) => {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    
    return(
        <div>
            <input type="number" onChange={e => setVal1(e.target.value)}/>
            <input type="number" onChange={e => setVal2(e.target.value)}/>
            <button onClick={() => calcula(val1*val2)}>Calcular</button>

        </div>
    )
}

export default Componente1;