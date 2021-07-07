import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [fullName, setFullName] = useState("");
    const [lastName, setlastName] = useState("");
    const [lasrNamenew, setLastNameNew] = useState("")
    const InputEvent = (e) =>{
        
        console.log(e.target.value);
        setName(e.target.value)
    }

    const InputEventTwo = (e) =>{
        
        console.log(e.target.value);
        setlastName(e.target.value)
    }
    console.log(name)
    
    const onSubmits = (e) =>{
        e.preventDefault();
        setFullName(name)
        setLastNameNew(lastName)
    }
    return (
        <div>
            <form onSubmit={onSubmits}> 
            <h1>Hello {fullName} {lasrNamenew}</h1>
            <input type = "text" placeholder = "Enter Your Name" onChange = {InputEvent} value={name}/>
            <input type = "text" placeholder = "Enter Your Last Name" onChange = {InputEventTwo} value={lastName}/>
            <button type="submit">Click Me</button>
            </form>

        </div>
    )
}

export default Form
