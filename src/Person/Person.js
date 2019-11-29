import React from 'react';
// import Radium from 'radium';

// import './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`

width:60%;
margin: 10px auto;
padding: 10px;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
text-align:center;

@media (min-width:500px) {

        width:400px;
    
}

`;


const person = (props)=> {

    return (

       <StyledDiv>
            <div>

                <p onClick={props.click}> I am { props.name } and I am { props.age } years old!</p>
                <p> { props.children }</p>
                <input type="text" onChange={props.changed} value={props.name}/>

            </div>
        </StyledDiv>
    );
}

export default person;