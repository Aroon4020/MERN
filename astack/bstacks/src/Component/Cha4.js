import React from 'react'
import {add, mul, div, sub} from './Calc'
function Cha4() {
    return (
        <div>
            <ul>
                <li>{add(40,4)}</li>
                <li>{mul(40,4)}</li>
                <li>{div(40,4)}</li>
                <li>{sub(40,4)}</li>
            </ul>
        </div>
    )
}

export default Cha4
