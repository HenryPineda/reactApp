import React from 'react';
// import Radium from 'radium';

// import './Person.css';
//import styled from 'styled-components';

import classes from './Person.module.css';

// const StyledDiv =  styled.div`

// width:60%;
// margin: 10px auto;
// padding: 10px;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// text-align:center;

// @media (min-width:500px) {

//         width:400px;
    
// }

// `;


const person = (props)=> {

    // const style ={

    //     '@media (min-width: 500px)': {

    //         width:'450px'
    //     }
    // }

    // const rnd = Math.random();
    // if(rnd < 0.7){

    //     throw new Error('Something went wrong!');
    // }

    return (

    //    <StyledDiv>
            <div className={classes.Person}>

                <p onClick={props.click}> I am { props.name } and I am { props.age } years old!</p>
                <p> { props.children }</p>
                <input type="text" onChange={props.changed} value={props.name}/>

            </div>
        // </StyledDiv>
    );
}

export default person;