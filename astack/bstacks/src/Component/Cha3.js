import React from 'react'

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
if(currDate >= 1 && currDate < 12){
    greeting = "Good Morning";
}

else if(currDate >= 12 && currDate < 19){
    greeting = "Good Afternoon";
}
else{
    greeting = "Good Night";
}

function Cha3() {
    return (
        <div>
            <h1>Hello {greeting}</h1>
        </div>
    )
}

export default Cha3
