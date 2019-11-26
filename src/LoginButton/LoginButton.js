import React from 'react';

import Greeting from '../Greeting/Greeting';

const loginbutton = (props) =>{

    //console.log(props);

    let isLoggedin2 = props.isLoggedin;
    return (

        <div>

            <button onClick={props.onClick}>Login</button>

            <Greeting isLoggedin={isLoggedin2} />;
        </div>
    );
}

export default loginbutton;