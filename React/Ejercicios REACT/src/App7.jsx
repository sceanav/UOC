import {useState} from 'react';

const App = () => {
    const [inputAncho, setInputAncho] = useState(0);
    const [inputAlto, setInputAlto] = useState(0);
    let areaCalculated = inputAncho * inputAlto;

    return (
        <div>
            <input type="number" onChange={alto => setInputAlto(alto.target.value)}/>
            <br />
            <input type="number" onChange={ancho => setInputAncho(ancho.target.value)} />
            <br />
            <output><h4>El área es: {inputAlto} * {inputAncho} = {areaCalculated} </h4></output>

        </div>
    )
}

export default App;