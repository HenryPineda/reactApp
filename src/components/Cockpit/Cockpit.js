
import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let classes2 = [];

    let btnClass = '';

    if(props.showsPersons){

        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){

      classes2.push(classes.red);
    }

    if(props.persons.length <=1){

      classes2.push(classes.bold);
    }

    

    return (

        <div className={classes.Cockpit}>

            <p className={classes2.join(' ')}>Hi, I am a react app!</p>

            <button
            //style = {style}
            // onClick= {this.switchNameHandler.bind(this, 'Henry Pineda')}>Switch name
            className={btnClass}
            onClick = {props.clicked}
            >Show people
            </button>
        </div>
    );
}

export default cockpit;