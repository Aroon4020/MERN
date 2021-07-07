import React, { useState } from 'react'
import Cha2 from './Cha2'
import Cha3 from './Cha3'

function Cha5() {
    const [count, setCount] = useState(0)
    const IncNum = () =>{
        setCount(count+1) //= count+1
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncNum}>click me</button>
        </div>
    )
}

export default Cha5
