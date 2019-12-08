
import React, {useState, useEffect} from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {

        console.log('[Cockpit.js] useEffect');

        const timer = setTimeout(() => {

            alert('Saved data to cloud!');
        }, 1000);

        return () => {

            clearTimeout(timer);
            console.log('[Cockpit] cleanup work in useEffect');
        };
    }, [props.persons]);

    useEffect(() => {

        console.log('[Cockpit] second useEffect');

        return () => {

            console.log('[Cockpit] cleanup work in 2nd useEffect');
        };

    });

    let classes2 = [];

    let btnClass = '';

    if(props.showsPersons){

        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){

      classes2.push(classes.red);
    }

    if(props.personsLength <=1){

      classes2.push(classes.bold);
    }

   

    return (

        <div className={classes.Cockpit}>

            <h1>{props.title}</h1>

            <p className={classes2.join(' ')}>Hi, I am a react app!</p>

            <button
                //style = {style}
                // onClick= {this.switchNameHandler.bind(this, 'Henry Pineda')}>Switch name
                className={btnClass}
                onClick = {props.clicked}
            >
                Show people
            </button>

        </div>
    );
}

export default React.memo(Cockpit);