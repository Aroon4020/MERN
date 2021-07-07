import React from 'react'


const name = "AK";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function Cha2() {
    return (
        <div>
            <h1>Heloo {name}</h1>
            <p>Curret Date {currDate}</p>
            <p>Curret Time {currTime}</p>
               
        </div>
    )
}

export default Cha2
