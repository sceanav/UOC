import React from 'react'
import { useState } from 'react';
import Component from './Components/Component';

const App =()=>
{
    const [value,setValue] = useState(0);
    return (
    <div>
        <Component sendValue={setValue} value={value} />
        <h4>Resultado: {value}</h4>
    </div>)
}

export default App;