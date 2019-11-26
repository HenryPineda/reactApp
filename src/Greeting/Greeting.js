import React from 'react';

const greeting =(props) => {

    //const isLoggedin = props.isLoggedin;

    //super(props);

    console.log(props);

    let loginMessage;


    if(props.isLoggedIn){

        // loginMessage = 'Welcome user';

        loginMessage = <h1>Welcome user!</h1>;

    }else{

       loginMessage = <h1>You are a guest and something else</h1>;

    }

    return(

        <div>

            {loginMessage}
        </div>
    );



  
}

export default greeting;