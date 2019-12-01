import React from 'react';

import Greeting from '../Greeting/Greeting';

const logoutbutton = (props) => {

    let isLoggedin2 = props.isLoggedin;
    return (

        <div>

            <button onClick={props.onClick}>Logout</button>
            <Greeting isLoggedin={isLoggedin2} />;
        </div>
    );
}

export default logoutbutton;