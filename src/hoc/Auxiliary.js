
import React from 'react';



//const aux = props => props.children;

const aux = props => (

<div className={props.className} title={props.title}>{props.children}</div>

); 
export default aux;