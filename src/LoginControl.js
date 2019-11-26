import React, {Component} from 'react';

import './App.css';
import LoginButton from './LoginButton/LoginButton';
import LogoutButton from './LogoutButton/LogoutButton';



class LoginControl extends Component {

    constructor(props) {

        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {

        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {

        this.setState({isLoggedIn:false});
    }

    render() {

        let isLoggedIn = this.state.isLoggedIn;

        let button;

        let loginMessage;
    

        if(isLoggedIn){

            button= <LogoutButton onClick={this.handleLogoutClick} isLoggedIn={this.state.isLoggedIn} />;

            //loginMessage ="Welcome user";

            //loginMessage = <Greeting isLoggedIn={this.state.isLoggedIn} />;
           

        }else {

            button = <LoginButton onClick={this.handleLoginClick} isLoggedIn={this.state.isLoggedIn} />;

            //loginMessage = "You are a guest";

            //loginMessage = <Greeting isLoggedIn={this.state.isLoggedIn} />;
        }

        return (

            <div>

             

                {button}

                {/* <Greeting isLoggedIn={this.state.isLoggedIn} /> */}

                {/* {loginMessage} */}

                


            </div>


        );
    }



}

export default LoginControl;
