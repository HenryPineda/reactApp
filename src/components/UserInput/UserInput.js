
import React from 'react';

import './UserInput.css';

const userinput = (props)=> {

    return (

        <div className="UserInput">

            <input className="inputbox" onChange={props.changeInput} value={props.name}/>

        </div>

    )
}

export default userinput;