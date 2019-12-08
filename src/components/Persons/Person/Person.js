import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';

import classes from './Person.module.css';


class Person extends Component {


    render(){

        console.log('[person.js] rendering.....');

        return (

                // <div className={classes.Person}>
                    <Aux className={classes.Person}>
                        <p key="i1" onClick={this.props.click}> I am { this.props.name } and I am { this.props.age } years old!</p>
                        <p key="i2"> { this.props.children }</p>
                        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
                    </Aux>
                // </div>
                );


    }

   
}

export default Person;