import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
class Person extends Component {

    constructor(props) {

        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){

        //document.querySelector('input').focus();
        //this.inputElement.focus();
        this.inputElementRef.current.focus();

    }

    render(){

        console.log('[person.js] rendering.....');

        return (

                // <div className={classes.Person}>
                    <Aux>
                        { this.props.isAuth ? <p>Authenticated!</p> : <p>Log in!</p>}
                        <p key="i1" onClick={this.props.click}> I am { this.props.name } and I am { this.props.age } years old!</p>
                        <p key="i2"> { this.props.children }</p>
                        <input 
                            key="i3" 
                            // ref={ (inputEl) => {this.inputElement =inputEl}} 
                            ref={this.inputElementRef}
                            type="text" 
                            onChange={this.props.changed} 
                            value={this.props.name}
                        />

                    </Aux>
                // </div>
                );

    }

   
}


Person.propTypes = {

    click: PropTypes.func,
    name:  PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person, classes.Person);