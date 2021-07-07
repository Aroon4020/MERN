import React, { useState } from 'react'

function Cha6() {
   
    const time = () =>
    {
        settime(new Date().toLocaleTimeString())
    }
    const [getTime, settime] = useState(new Date().toLocaleTimeString())
    return (
        <div>
            <h1>{getTime}</h1>
            <button onClick = {time}>get time</button>
        </div>
    )
}

export default Cha6
